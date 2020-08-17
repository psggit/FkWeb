import "../styles/style.scss";
import React from "react";
import { playStore, appStore, appImage } from "../../../assets/images";

function VisitHipBarComponent() {
  return (
    <div className="visit-hip-bar-ext-container">
      <div className="visit-hip-bar-container">
        <div className="header">Please download the HipBar app</div>
        <div className="sub-text">to proceed</div>
        <div className="app-link">
          <a
            href="https://hipbar.onelink.me/X8lF?pid=Cross_sale&c=Website%20Badge%20July%2026%2C%202020"
            target="_blank"
            rel="noreferrer"
            className="play-store-img"
          >
            <img src={playStore} className="" />
          </a>
          <a
            href="https://hipbar.onelink.me/0DEk?pid=Cross_sale&c=Website%20Badge%20July%2026%2C%202020"
            target="_blank"
            rel="noreferrer"
            className="app-store-img"
          >
            <img src={appStore} className="" />
          </a>
        </div>
        <img src={appImage} className="app-img" />
        <a href="https://www.hipbar.com" target="_blank" rel="noreferrer">
          <div className="link">www.hipbar.com</div>
        </a>
      </div>
    </div>
  );
}

export { VisitHipBarComponent };
