import React, { useEffect } from "react";
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
  return (
    <SplashLoadingComponent
      motion={false}
      icon={drinksIcon}
      text="Something went wrong, please try again."
      buttonFunc={() => props.validateCart(payload)}
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

function ReturnEmptyCart() {
  return (
    <div className="cart hcenter">
      <EmptyCartComponent />
      <BottomNavigationContainer />
    </div>
  );
}

CartItems.propTypes = {
  products: PropTypes.object,
};

function CartItems(props) {
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
}

NextComponent.propTypes = {
  retailer: PropTypes.object,
  products: PropTypes.object,
  validateCart: PropTypes.func,
  selectedAddress: PropTypes.object,
};

function NextComponent(props) {
  //let shouldValidate = !props.validationSuccessful;
  let validateParams = {
    retailer: props.retailer,
    products: props.products,
    selectedAddress: props.selectedAddress,
  };
  return (
    <BottomNextComponent
      isNav={true}
      title="Checkout"
      onClickFunc={() => props.validateCart(validateParams)}
    />
  );
}

AlertValidateErrorComponent.propTypes = {
  closeValidationErrorMessage: PropTypes.func,
  validateErrorMessage: PropTypes.string,
};

function AlertValidateErrorComponent(props) {
  return (
    <Alert
      handleOption={() => props.closeValidationErrorMessage()}
      show={true}
      title={props.validateErrorMessage}
      option={"Ok"}
    />
  );
}

CartComponent.propTypes = {
  validationFailure: PropTypes.bool,
  validateError: PropTypes.bool,
  validationSuccessful: PropTypes.bool,
  validationInProgress: PropTypes.bool,
  resetOnUnmount: PropTypes.func,
};

function historyPush(path) {
  let history = useHistory();
  history.push(path);
}

function CartComponent(props) {
  useEffect(() => {
    return () => props.resetOnUnmount();
  }, []);

  if (props.validationSuccessful) {
    historyPush("/address/select/osm");
  }

  let isEmpty = props.isEmpty;
  if (isEmpty) {
    return <ReturnEmptyCart />;
  }

  if (props.validationFailure) {
    console.log(props);
    return <RetryValidationComponent {...props} />;
  }

  if (props.validateError) {
    return <AlertValidateErrorComponent {...props} />;
  }

  if (props.validationInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  }

  return (
    <div className="cart">
      <div className="full-cart show-content">
        <div className="padding-24">
          <CartHeaderComponent {...props} />
          <CartItems {...props} />
          <AddMoreComponent retailer={props.retailer} />
        </div>
        <NextComponent {...props} />
      </div>
      <BottomNavigationContainer />
    </div>
  );
}

export { CartComponent };
