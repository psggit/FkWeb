import React from "react";
import "./style.scss";

function LoadingComponent() {
  return (
    <div className="loading-container">
      <div className="spinner-grow spinner-adder" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="loading-msg">Loading...</div>
    </div>
  );
}

export { LoadingComponent };
