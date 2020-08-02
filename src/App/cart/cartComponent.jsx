import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";

import "./style.scss";
import { AddMoreComponent } from "./addMore";
import { CartItemComponent } from "./cartItem";
import { EmptyCartComponent } from "./emptyCart";
import { CartHeaderComponent } from "./header";
import { BottomNextComponent } from "../common/bottomNext";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";

RetryValidationComponent.propTypes = {
  products: PropTypes.object,
  retailer: PropTypes.object,
  validateCart: PropTypes.func,
};

function RetryValidationComponent(props) {
  let payload = {
    retailer: props.retailer,
    products: props.products,
  };
  let validate = () => props.validateCart(payload);
  return (
    <SplashLoadingComponent
      motion={false}
      icon={drinksIcon}
      text="Something went wrong, please try again."
      buttonFunc={validate}
      buttonText="Retry"
    />
  );
}

CartComponent.propTypes = {
  isEmpty: PropTypes.bool,
  products: PropTypes.object,
  key: PropTypes.number,
  retailer: PropTypes.object,
  validateCart: PropTypes.func,
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

CartComponent.propTypes = {
  validationFailure: PropTypes.bool,
};

function CartComponent(props) {
  let isEmpty = props.isEmpty;
  if (isEmpty) {
    return returnEmptyCart();
  } else {
    useLayoutEffect(() => {
      props.validateCart({
        retailer: props.retailer,
        products: props.products,
      });
    });
  }

  if (props.validationFailure) {
    return <RetryValidationComponent {...props} />;
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
        <BottomNextComponent routePath="/address/select/osm" title="Checkout" />
      </div>
    </div>
  );
}

export { CartComponent };
