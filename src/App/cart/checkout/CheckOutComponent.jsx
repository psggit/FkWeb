import React from "react";
import nextIcon from "../../../assets/images/next.svg";
import emptyCartIcon from "../../../assets/images/empty_cart.svg";
import "./style.scss";

function CheckOutComponent() {
  return (
    <div className="bottom-bar">
      <div className="btn">
        <div className="btn-label">Checkout</div>
        <img className="btn-arrow" src={nextIcon} />
      </div>
    </div>
  );
}

export { CheckOutComponent };
