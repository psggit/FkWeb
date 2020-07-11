import React from "react";
import drinksIcon from "../../assets/images/drinks.svg";
import emptyCartIcon from "../../assets/images/empty_cart.svg";
import "./style.scss";

function Cart() {
  return (
    <div className="cart">
      <div className="full-cart show-content">
        <div className="cart-header">
          <div className="purchasing-from">PURCHASING FROM</div>
          <div className="retailer-name">KloudBar</div>
          <div className="cart-address">RA Colony, Chennai</div>
        </div>
        <div>
          <div className="cart-item">
            <img src={emptyCartIcon} className="cart-image" />
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
        </div>
      </div>
      <div className="empty-cart hide-content">
        <img src={emptyCartIcon} width="120" height="120" />
        <div className="empty-title empty-title-margin">Your cart is </div>
        <div className="empty-title">Empty</div>
        <div className="favorite-drinks favorite-drinks-margin">
          Get your favourite drinks in a
        </div>
        <div className="favorite-drinks">jiffy!</div>
        <div className="search-drinks">Search Drinks</div>
      </div>
    </div>
  );
}

export default Cart;
