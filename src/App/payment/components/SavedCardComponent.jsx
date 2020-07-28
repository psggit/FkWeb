import React from "react";
import "../style.scss";
import { lockIcon } from "../../../assets/images";

function SavedCardComponent() {
  return (
    <div className="saved-card-container">
      <div className="card-details">
        <div className="card-number">
          <div className="card-mask">XXXX-XXXX-XXXX-</div>
          <div className="card-last-digits">1234</div>
        </div>
        <div className="card-expiry">01/23</div>
      </div>
      <div className="card-cvv-container">
        <img src={lockIcon} className="card-cvv-image" />
        <input
          type="text"
          id="cvvNumber"
          placeholder="CVV Number"
          className="card-cvv"
        />
      </div>
    </div>
  );
}

export { SavedCardComponent };
