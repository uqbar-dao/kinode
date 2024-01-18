use anyhow::anyhow;
use kinode_process_lib::kernel_types::{KernelCommand, KernelPrint};
use kinode_process_lib::kinode::process::standard as wit;
use kinode_process_lib::{println, Address, ProcessId, Request};
use serde_json::json;

wit_bindgen::generate!({
    path: "../../../wit",
    world: "process",
    exports: {
        world: Component,
    },
});

struct TerminalState {
    our: Address,
    current_target: Option<Address>,
}

fn serialize_message(message: &str) -> anyhow::Result<Vec<u8>> {
    Ok(message.as_bytes().to_vec())
}

fn parse_command(state: &mut TerminalState, line: &str) -> anyhow::Result<()> {
    let (head, tail) = line.split_once(" ").unwrap_or((&line, ""));
    match head {
        "" | " " => return Ok(()),
        // set the current target, so you can message it without specifying
        "/a" | "/app" => {
            if tail == "" || tail == "clear" {
                state.current_target = None;
                println!("current target cleared");
                return Ok(());
            }
            let Ok(target) = tail.parse::<Address>() else {
                return Err(anyhow!("invalid address: \"{tail}\""));
            };
            println!("current target set to {target}");
            state.current_target = Some(target);
            Ok(())
        }
        // send a message to a specified app
        // if no current_target is set, require it,
        // otherwise use the current_target
        "/m" | "/message" => {
            if let Some(target) = &state.current_target {
                Request::new().target(target.clone()).body(tail).send()
            } else {
                let (target, body) = match tail.split_once(" ") {
                    Some((a, p)) => (a, p),
                    None => return Err(anyhow!("invalid command: \"{line}\"")),
                };
                let Ok(target) = target.parse::<Address>() else {
                    return Err(anyhow!("invalid address: \"{target}\""));
                };
                Request::new().target(target).body(body).send()
            }
        }
        "/s" | "/script" => {
            let (process, args) = match tail.split_once(" ") {
                Some((p, a)) => (
                    match p.parse::<ProcessId>() {
                        Ok(p) => p,
                        Err(_) => return Err(anyhow!("invalid process id: \"{tail}\"")),
                    },
                    a,
                ),
                None => match tail.parse::<ProcessId>() {
                    Ok(p) => (p, ""),
                    Err(_) => return Err(anyhow!("invalid process id: \"{tail}\"")),
                },
            };
            Request::new()
                .target(Address::new("our", ("runner", "script", "sys")))
                .body(
                    json!({
                        "Run": {
                            // TODO we should add a package_id() method to ProcessId that will get this for you
                            "package": {
                                "package_name": process.package(),
                                "publisher_node": process.publisher(),
                            },
                            "wasm_path": format!("{}.wasm", process.process()),
                            "args": args
                        }
                    })
                    .to_string()
                    .into_bytes(),
                )
                .send()
        }
        _ => return Err(anyhow!("invalid command: \"{line}\"")),
    }
}

struct Component;
impl Guest for Component {
    fn init(our: String) {
        let mut state = TerminalState {
            our: our.parse::<Address>().unwrap(),
            current_target: None,
        };
        loop {
            let (source, message) = match wit::receive() {
                Ok((source, message)) => (source, message),
                Err((error, _context)) => {
                    println!("terminal: net error: {:?}!", error.kind);
                    continue;
                }
            };
            match message {
                wit::Message::Request(wit::Request { body, .. }) => {
                    if state.our != source {
                        continue;
                    }
                    match parse_command(&mut state, std::str::from_utf8(&body).unwrap_or_default())
                    {
                        Ok(()) => continue,
                        Err(e) => println!("terminal: {e}"),
                    }
                }
                wit::Message::Response((wit::Response { body, .. }, _)) => {
                    if let Ok(txt) = std::str::from_utf8(&body) {
                        println!("response from {source}: {txt}");
                    } else {
                        println!("response from {source}: {body:?}");
                    }
                }
            }
        }
    }
}
