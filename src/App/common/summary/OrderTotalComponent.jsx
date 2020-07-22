import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

OrderTotalComponent.propTypes = {
  total: PropTypes.any,
};

function OrderTotalComponent(props) {
  const total = props.total;
  return (
    <div className="order-container">
      <div>Order Total</div>
      <div>{total}</div>
    </div>
  );
}

export default OrderTotalComponent;
