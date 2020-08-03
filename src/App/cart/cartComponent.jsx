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

NextComponent.propTypes = {
  retailer: PropTypes.object,
  products: PropTypes.object,
  validateCart: PropTypes.func,
};

function NextComponent(props) {
  let shouldValidate = !props.validationSuccessful;
  let validateParams = {
    retailer: props.retailer,
    products: props.products,
  };
  if (shouldValidate) {
    return (
      <BottomNextComponent
        title="Checkout"
        onClickFunc={() => props.validateCart(validateParams)}
      />
    );
  } else {
    return (
      <BottomNextComponent routePath="/address/select/osm" title="Checkout" />
    );
  }
}

CartComponent.propTypes = {
  validationFailure: PropTypes.bool,
};

function CartComponent(props) {
  let isEmpty = props.isEmpty;
  if (isEmpty) {
    return returnEmptyCart();
  }

  if (props.validationFailure) {
    return <RetryValidationComponent {...props} />;
  }

  return (
    <div className="cart">
      <div className="full-cart show-content">
        <div className="padding-24">
          <CartHeaderComponent {...props} />
          {cartItems(props)}
          <AddMoreComponent />
        </div>
        <NextComponent {...props} />
      </div>
    </div>
  );
}

export { CartComponent };
