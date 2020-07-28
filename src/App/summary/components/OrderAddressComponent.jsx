import React from "react";
import "./style.scss";
import { locationIcon } from "../../../assets/images";

function OrderAddressComponent() {
  return (
    <div className="order-address-container">
      <div className="address-logo-container">
        <img src={locationIcon} className="image" />
      </div>
      <div className="address-details-container">
        <div className="title">Home</div>
        <div className="address">No11, Chennai</div>
      </div>
    </div>
  );
}

export default OrderAddressComponent;
