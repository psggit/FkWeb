import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function AddItemComponent(props) {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    addItem: { count },
  } = counter;
  return (
    <div className="cart-content">
      <div className="sub-item">
        <div className="cart-counter">
          <div className="symbol" onClick={() => dispatch(decrement())}>
            -
          </div>
          <div>{count}</div>
          <div className="symbol" onClick={() => dispatch(increment())}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddItemComponent };
