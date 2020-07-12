import React from "react";
import "./style.scss";

function CartHeaderComponent() {
  return (
    <div className="cart-header">
      <div className="purchasing-from">PURCHASING FROM</div>
      <div className="retailer-name">KloudBar</div>
      <div className="cart-address">RA Colony, Chennai</div>
    </div>
  );
}

export { CartHeaderComponent };
