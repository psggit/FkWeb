import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { locationIcon, addAddressIcon } from "../../../assets/images";

BottomAddressComponent.propTypes = {
  selectedAddress: PropTypes.object,
  showAddAddress: PropTypes.func,
};

function BottomAddressComponent(props) {
  if (props.selectedAddress !== null) {
    return (
      <div className="bottom-address-component">
        <div className="bottom-bar-nav">
          <div className="order-address-container">
            <div className="address-details-container">
              <div className="address-logo-container">
                <img src={locationIcon} className="image" />
              </div>
              <div className="title">{props.selectedAddress.type}</div>
              <div className="address">{props.selectedAddress.address}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bottom-address-component">
      <div className="bottom-bar-nav">
        <div className="add-new-address" onClick={props.showAddAddress}>
          <div>
            <div className="title">Add New Address</div>
            <div className="address">
              Please add address which you want to be delivered
            </div>
          </div>
          <img src={addAddressIcon} className="add-image" />
        </div>
      </div>
    </div>
  );
}

export { BottomAddressComponent };
