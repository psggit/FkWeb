import React from "react";
import "./style.scss";
import { AddMoreComponent } from "./addMore";
import { CartItemComponent } from "./cartItem";
import { CheckoutComponent } from "./checkout";
import { EmptyCartComponent } from "./emptyCart";
import { CartHeaderComponent } from "./header";

function Cart() {
  return (
    <div className="cart">
      <div className="full-cart show-content">
        <CartHeaderComponent />
        <CartItemComponent />
        <AddMoreComponent />
        <CheckoutComponent />
      </div>
      <EmptyCartComponent className="hide-content" />
    </div>
  );
}

export default Cart;
