import React from "react";
import "./style.scss";
import locationIcon from "../../../assets/images/home.png";

function OrderAddressComponent() {
  return (
    <div className="order-address-container">
      <div className="address-logo-container">
        <img src={locationIcon} className="image" />
      </div>
      <div className="address-details-container">
        <div className="title">EDIT</div>
        <div className="address">DELETE</div>
      </div>
    </div>
  );
}

export default OrderAddressComponent;
