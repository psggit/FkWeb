import React from "react";
import { deliveryPersonIcon, rightArrowIcon } from "../../../assets/images";
import "./style.scss";
import PropTypes from "prop-types";

CurretOrderComponent.propTypes = {
  title: PropTypes.string,
  msg: PropTypes.string,
  onClickFunc: PropTypes.func,
};

function CurretOrderComponent(props) {
  const { title, msg, onClickFunc } = props;

  return (
    <div className="current-order-height">
      <div
        className="current-order-bar current-order-height"
        onClick={onClickFunc}
      >
        <img className="current-image" src={deliveryPersonIcon} />
        <div className="current-order-detail">
          <div className="order-title">{title}</div>
          <div className="order-msg">OTP: {msg}</div>
        </div>
        <img className="current-order-next" src={rightArrowIcon} />
      </div>
    </div>
  );
}

export { CurretOrderComponent };
