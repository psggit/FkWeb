import React from "react";
import "./style.scss";

function AddressComponent() {
  return (
    <div>
      <div className="address-component-container">
        <div className="address-radio-container">
          <input
            className="address-radio"
            type="radio"
            name="address"
            value="Home"
          />
        </div>
        <div className="address-detail-container">
          <div className="title">Home</div>
          <div className="address">Palavakkam, chennai</div>
          <div className="modify-container">
            <div className="edit">EDIT</div>
            <div className="delete">DELETE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressComponent;
