import React from "react";
import upiIcon from "../../../assets/images/upi.svg";
import { UPILowSuccessRate } from "./UPILowSuccessRate";

import "../style.scss";

function UPIComponent() {
  return (
    <div className="upi-component">
      <img src={upiIcon} className="upi-image" />
      <div className="upi-details">
        <UPILowSuccessRate />
        <div className="upi-field-container">
          <input
            type="radio"
            name="upiradio"
            id="upiradioinput"
            className="upi-radio"
          />
          <input
            type="text"
            placeholder="Enter your UPI ID"
            className="upi-id"
          />
        </div>
      </div>
    </div>
  );
}

export { UPIComponent };
