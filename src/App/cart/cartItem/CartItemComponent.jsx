import React from "react";
import drinksIcon from "../../../assets/images/drinks.svg";
import "./style.scss";

function CartItemComponent() {
  return (
    <div className="cart-item">
      <img src={drinksIcon} className="cart-image" />
      <div className="cart-content">
        <div>Jhonnie Walker Black Label</div>
        <div className="sub-item">
          <div className="cart-volume">750ml | Rs 3,200.00</div>
          <div className="cart-counter">
            <div className="symbol">-</div>
            <div>10</div>
            <div className="symbol">+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CartItemComponent };
