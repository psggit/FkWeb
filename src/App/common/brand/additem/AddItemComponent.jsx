import React from "react";
import PropTypes from "prop-types";

AddItemComponent.propTypes = {
  decrement: PropTypes.func,
  increment: PropTypes.func,
  count: PropTypes.number,
};

function AddItemComponent(props) {
  const { decrement, increment, count } = props;
  return (
    <div className="cart-content">
      <div className="sub-item">
        <div className="cart-counter">
          <div
            className="symbol"
            onClick={() => {
              decrement();
            }}
          >
            -
          </div>
          <div>{count}</div>
          <div
            className="symbol"
            onClick={() => {
              increment();
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddItemComponent };
