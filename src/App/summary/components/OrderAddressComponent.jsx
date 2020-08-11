import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { locationIcon } from "../../../assets/images";

OrderAddressComponent.propTypes = {
  selectedAddress: PropTypes.object,
};

function OrderAddressComponent(props) {
  return (
    <div className="order-address-container">
      <div className="address-details-container">
        <div className="address-logo-container">
          <img src={locationIcon} className="image" />
        </div>
        <div className="title">{props.selectedAddress.type}</div>
        <div className="address">{props.selectedAddress.address}</div>
      </div>
    </div>
  );
}

export default OrderAddressComponent;
