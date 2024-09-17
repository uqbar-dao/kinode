import { useEffect, useState } from "react";
import KinodeBird from "../components/KinodeBird";
import useHomepageStore from "../store/homepageStore";
import AllApps from "../components/AllApps";
import Widgets from "../components/Widgets";
import WidgetsSettingsModal from "../components/WidgetsSettingsModal";

function Homepage() {
  const [our, setOur] = useState("");
  const [version, setVersion] = useState("");
  const { setApps, showWidgetsSettings, setShowWidgetsSettings } =
    useHomepageStore();

  const getAppPathsAndIcons = () => {
    Promise.all([
      fetch("/apps", { credentials: "include" })
        .then((res) => res.json())
        .catch(() => []),
      fetch("/version", { credentials: "include" })
        .then((res) => res.text())
        .catch(() => ""),
    ]).then(([appsData, version]) => {
      setVersion(version);
      setApps(appsData);
    });
  };

  useEffect(() => {
    getAppPathsAndIcons();
  }, [our]);

  useEffect(() => {
    fetch("/our", { credentials: "include" })
      .then((res) => res.text())
      .then((data) => {
        if (data.match(/^[a-zA-Z0-9\-\.]+\.[a-zA-Z]+$/)) {
          setOur(data);
        }
      });
  }, [our]);

  return (
    <div id="homepage">
      <div className="container">
        <header>
          <KinodeBird />
          <h2>
            {new Date().getHours() < 4
              ? "Good evening"
              : new Date().getHours() < 12
              ? "Good morning"
              : new Date().getHours() < 18
              ? "Good afternoon"
              : "Good evening"}
            , {our}
          </h2>
          <a
            href="https://github.com/kinode-dao/kinode/releases"
            target="_blank"
          >
            [kinode v{version}]
          </a>
        </header>

        <div id="widgets-container">
          <header id="widgets-header">
            <h2>Widgets</h2>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowWidgetsSettings(true);
              }}
            >
              [⚙]
            </a>
          </header>
          <Widgets />
        </div>
        <footer>
          <AllApps />
        </footer>
        {showWidgetsSettings && <WidgetsSettingsModal />}
      </div>
    </div>
  );
}

export default Homepage;
