import React from "react";
import PropTypes from "prop-types";

import "./style.scss";
import { AddMoreComponent } from "./addMore";
import { CartItemComponent } from "./cartItem";
import { EmptyCartComponent } from "./emptyCart";
import { CartHeaderComponent } from "./header";
import { BottomNextComponent } from "../common/bottomNext";

CartComponent.propTypes = {
  isEmpty: PropTypes.bool,
  products: PropTypes.object,
  key: PropTypes.number,
};

function returnEmptyCart() {
  return (
    <div className="cart">
      <EmptyCartComponent />
    </div>
  );
}

const cartItems = (props) => {
  return Object.entries(props.products).map((k) => {
    return (
      <CartItemComponent
        key={k[0]}
        product={k[1]}
        retailer={props.retailer}
        addItem={props.addSKUToCart}
        removeItem={props.removeSKUFromCart}
      />
    );
  });
};

function CartComponent(props) {
  let isEmpty = props.isEmpty;
  if (isEmpty) {
    return returnEmptyCart();
  }
  return (
    <div className="cart">
      <div className="hide-content">
        <EmptyCartComponent />
      </div>
      <div className="full-cart show-content">
        <div className="padding-24">
          <CartHeaderComponent {...props} />
          {cartItems(props)}
          <AddMoreComponent />
        </div>
        <BottomNextComponent routePath="/address/select" title="Checkout" />
      </div>
    </div>
  );
}

export { CartComponent };
