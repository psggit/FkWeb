import React from "react";
import emptyCartIcon from "../../../assets/images/empty_cart.svg";
import "./style.scss";

function EmptyCartComponent() {
  return (
    <div className="empty-cart">
      <img src={emptyCartIcon} width="120" height="120" />
      <div className="empty-title empty-title-margin">Your cart is </div>
      <div className="empty-title">Empty</div>
      <div className="favorite-drinks favorite-drinks-margin">
        Get your favourite drinks in a
      </div>
      <div className="favorite-drinks">jiffy!</div>
      <div className="search-drinks">Search Drinks</div>
    </div>
  );
}

export { EmptyCartComponent };
