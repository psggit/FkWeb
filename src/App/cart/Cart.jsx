import React from "react";
import "./style.scss";
import { AddMoreComponent } from "./addMore";
import { CartItemComponent } from "./cartItem";
import { CheckOutComponent } from "./checkout";
import { EmptyCartComponent } from "./emptyCart";
import { CartHeaderComponent } from "./header";

function Cart() {
  return (
    <div className="cart">
      <div className="full-cart show-content">
        <div className="padding-24">
          <CartHeaderComponent />
          <CartItemComponent />
          <AddMoreComponent />
        </div>
        <CheckOutComponent />
      </div>
      <div className="hide-content">
        <EmptyCartComponent />
      </div>
    </div>
  );
}

export default Cart;
