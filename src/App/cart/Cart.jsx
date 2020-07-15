import React from "react";
import "./style.scss";
import { AddMoreComponent } from "./addMore";
import { CartItemComponent } from "./cartItem";
import { EmptyCartComponent } from "./emptyCart";
import { CartHeaderComponent } from "./header";
import { BottomNextComponent } from "../common/bottomNext";
import BottomNavigationComponent from "../common/bottomNavigation";

function Cart() {
  return (
    <div className="cart">
      <div className="full-cart show-content">
        <div className="padding-24">
          <CartHeaderComponent />
          <CartItemComponent />
          <AddMoreComponent />
        </div>
        <BottomNextComponent routePath="/address/select" title="Checkout" />
      </div>
      <div className="hide-content">
        <EmptyCartComponent />
      </div>
      <BottomNavigationComponent />
    </div>
  );
}

export default Cart;
