import React from "react";
import { cancelIcon } from "../../../assets/images";
import PropTypes from "prop-types";

CancelOrderComponent.propTypes = {
  onClick: PropTypes.func,
};

function CancelOrderComponent(props) {
  return (
    <div
      onClick={() => {
        props.onClick();
      }}
      className="cancel-container"
    >
      <div className="cancel-title">Cancel Order</div>
      <img src={cancelIcon} className="class-icon" />
    </div>
  );
}

export { CancelOrderComponent };
