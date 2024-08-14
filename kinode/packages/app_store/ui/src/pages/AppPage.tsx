import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaDownload, FaCheck, FaTimes, FaPlay } from "react-icons/fa";
import useAppsStore from "../store";

export default function AppPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { listings, installed, fetchListings, fetchInstalled } = useAppsStore();

  useEffect(() => {
    fetchListings();
    fetchInstalled();
  }, [fetchListings, fetchInstalled]);

  const app = useMemo(() => {
    const foundApp = listings.find(a => `${a.package_id.package_name}:${a.package_id.publisher_node}` === id) || null;
    console.log("Found app:", foundApp);
    return foundApp;
  }, [listings, id]);

  const installedApp = useMemo(() => {
    if (!app) return null;
    const foundInstalledApp = installed.find(i =>
      i.package_id.package_name === app.package_id.package_name &&
      i.package_id.publisher_node === app.package_id.publisher_node
    ) || null;
    console.log("Found installed app:", foundInstalledApp);
    return foundInstalledApp;
  }, [app, installed]);

  const { currentVersion, latestVersion } = useMemo(() => {
    let current: string | null = null;
    let latest: string | null = null;
    if (app?.metadata?.properties?.code_hashes) {
      console.log("Code hashes:", app.metadata.properties.code_hashes);
      const versions = app.metadata.properties.code_hashes;
      if (versions.length > 0) {
        latest = versions[versions.length - 1][0];
        if (installedApp) {
          const installedVersion = versions.find(([_, hash]) => hash === installedApp.our_version_hash);
          if (installedVersion) {
            current = installedVersion[0];
          }
        }
      }
    } else {
      console.log("No code hashes found in app metadata");
    }
    console.log("Current version:", current, "Latest version:", latest);
    return { currentVersion: current, latestVersion: latest };
  }, [app, installedApp]);

  if (!app) {
    return <div className="app-page"><h4>App details not found for {id}</h4></div>;
  }

  const handleDownload = () => {
    navigate(`/download/${id}`);
  };

  return (
    <section className="app-page">
      <div className="app-header">
        {app.metadata?.image && (
          <img src={app.metadata.image} alt={app.metadata?.name || app.package_id.package_name} className="app-icon" />
        )}
        <div className="app-title">
          <h2>{app.metadata?.name || app.package_id.package_name}</h2>
          <p className="app-id">{`${app.package_id.package_name}.${app.package_id.publisher_node}`}</p>
        </div>
      </div>

      <div className="app-description">{app.metadata?.description || "No description available"}</div>

      <div className="app-info">
        <ul className="detail-list">
          <li>
            <span>Installed:</span>
            <span className="status-icon">{installedApp ? <FaCheck className="installed" /> : <FaTimes className="not-installed" />}</span>
          </li>
          {currentVersion && (
            <li><span>Current Version:</span> <span>{currentVersion}</span></li>
          )}
          {latestVersion && (
            <li><span>Latest Version:</span> <span>{latestVersion}</span></li>
          )}
          <li><span>Publisher:</span> <span>{app.package_id.publisher_node}</span></li>
          <li><span>License:</span> <span>{app.metadata?.properties?.license || "Not specified"}</span></li>
        </ul>
      </div>

      <div className="app-actions">
        <button onClick={handleDownload} className="primary">
          <FaDownload /> Download
        </button>
        {installedApp && (
          <button className="primary">
            <FaPlay /> Launch
          </button>
        )}
      </div>

      {app.metadata?.properties?.screenshots && (
        <div className="app-screenshots">
          <h3>Screenshots</h3>
          <div className="screenshot-container">
            {app.metadata.properties.screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className="app-screenshot" />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}