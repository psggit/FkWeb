import React from "react";
import { rightArrowIcon, chooeLocationIcon } from "../../../assets/images";
import "./style.scss";
import PropTypes from "prop-types";

ChooseAddressComponent.propTypes = {
  address: PropTypes.object,
  onClickFunc: PropTypes.func,
};

function ChooseAddressComponent(props) {
  return (
    <div className="choose-address-wrapper" onClick={props.onClickFunc}>
      <div className="choose-address-container fixed">
        <img src={chooeLocationIcon} className="choose-address-image" />
        <div className="choose-address-group">
          <div className="address-title-container">
            <div className="address-title">{props.address.type}</div>
            <img src={rightArrowIcon} className="choose-address-right-arrow" />
          </div>
          <div className="address-sub-text">{props.address.address}</div>
        </div>
      </div>
    </div>
  );
}

export { ChooseAddressComponent };
