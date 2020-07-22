import React from "react";
import PropTypes from "prop-types";

CartTotalComponent.propTypes = {
  cartTotal: PropTypes.any,
};

function CartTotalComponent(props) {
  const cartTotal = props.cartTotal;
  return (
    <div className="charges-container">
      <div>Cart Total</div>
      <div>{cartTotal}</div>
    </div>
  );
}

export default CartTotalComponent;
