import React from "react";
import "./styles/style.scss";

function IframeComponent() {
  return (
    <div className = "iFrameWrap">
      <iframe src="https://hipbar.com/user-terms" title="User Terms"></iframe>
    </div>
  );
}

export { IframeComponent };
