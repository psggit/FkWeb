import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

CartHeaderComponent.propTypes = {
  retailer: PropTypes.object,
};

function CartHeaderComponent(props) {
  return (
    <div className="cart-header">
      <div className="purchasing-from">PURCHASING FROM</div>
      <div className="retailer-name">{props.retailer.name}</div>
      <div className="cart-address">{props.retailer.description}</div>
    </div>
  );
}

export { CartHeaderComponent };
