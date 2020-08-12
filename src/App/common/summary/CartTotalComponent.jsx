import React from "react";
import PropTypes from "prop-types";

CartTotalComponent.propTypes = {
  cartTotal: PropTypes.any,
  label: PropTypes.string,
};

function CartTotalComponent(props) {
  const cartTotal = props.cartTotal;
  return (
    <div className="charges-container">
      <div>{props.label ? props.label : "Cart Total"}</div>
      <div>{cartTotal}</div>
    </div>
  );
}

export default CartTotalComponent;
