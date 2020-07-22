import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

OrderTotalComponent.propTypes = {
  total: PropTypes.any,
  marginTop: PropTypes.bool,
};

function OrderTotalComponent(props) {
  const total = props.total;
  const marginTop = props.marginTop;
  return (
    <div
      className={
        marginTop ? "order-container" : "order-container remove-top-border"
      }
    >
      <div>Order Total</div>
      <div>{total}</div>
    </div>
  );
}

export default OrderTotalComponent;
