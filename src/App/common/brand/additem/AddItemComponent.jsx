import React from "react";

function AddItemComponent(props) {
  const {decrement,increment,count}=props
  console.log(props)
  return (
    <div className="cart-content">
      <div className="sub-item">
        <div className="cart-counter">
          <div className="symbol" onClick={decrement}>
            -
          </div>
          <div>{count}</div>
          <div className="symbol" onClick={increment}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddItemComponent };
