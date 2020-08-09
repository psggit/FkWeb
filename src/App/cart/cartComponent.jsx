import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import "./style.scss";
import { AddMoreComponent } from "./addMore";
import { CartItemComponent } from "./cartItem";
import { EmptyCartComponent } from "./emptyCart";
import { CartHeaderComponent } from "./header";
import { BottomNextComponent } from "../common/bottomNext";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";
import { Alert } from "../common/alert";
import { BottomNavigationContainer } from "../common/bottomNavigation";

RetryValidationComponent.propTypes = {
  products: PropTypes.object,
  retailer: PropTypes.object,
  validateCart: PropTypes.func,
  selectedAddress: PropTypes.object,
};

function RetryValidationComponent(props) {
  let payload = {
    retailer: props.retailer,
    products: props.products,
    selectedAddress: props.selectedAddress,
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
      <BottomNavigationContainer />
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
    selectedAddress: props.selectedAddress,
  };
  if (shouldValidate) {
    return (
      <BottomNextComponent
        isNav={true}
        title="Checkout"
        onClickFunc={() => props.validateCart(validateParams)}
      />
    );
  } else {
    return (
      <BottomNextComponent
        isNav={true}
        routePath="/address/select/osm"
        title="Checkout"
      />
    );
  }
}

AlertValidateErrorComponent.propTypes = {
  closeValidationErrorMessage: PropTypes.func,
  validateErrorMessage: PropTypes.string,
};

function AlertValidateErrorComponent(props) {
  return (
    <Alert
      handleOption={props.closeValidationErrorMessage}
      show={true}
      title={props.validateErrorMessage}
      option={"Ok"}
    />
  );
}

CartComponent.propTypes = {
  validationFailure: PropTypes.bool,
  validateError: PropTypes.bool,
  resetValidation: PropTypes.func,
  validationSuccessful: PropTypes.bool,
  resetOnUnmount: PropTypes.func,
};

function CartComponent(props) {
  useLayoutEffect(() => {
    return props.resetOnUnmount;
  }, []);
  let isEmpty = props.isEmpty;
  if (isEmpty) {
    return returnEmptyCart();
  }

  if (props.validationFailure) {
    return <RetryValidationComponent {...props} />;
  }

  if (props.validateError) {
    return <AlertValidateErrorComponent {...props} />;
  }

  if (props.validationSuccessful) {
    let history = useHistory();
    history.push("/address/select/osm");
  }

  return (
    <div className="cart">
      <div className="full-cart show-content">
        <div className="padding-24">
          <CartHeaderComponent {...props} />
          {cartItems(props)}
          <AddMoreComponent retailer={props.retailer} />
        </div>
        <NextComponent {...props} />
      </div>
      <BottomNavigationContainer />
    </div>
  );
}

export { CartComponent };
