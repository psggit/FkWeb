import React from "react";
import "./style.scss";

function LoadingComponent() {
  return (
    <div className="loading-container">
      <div className="spinner-grow spinner-adder" role="status"></div>
    </div>
  );
}

export { LoadingComponent };
