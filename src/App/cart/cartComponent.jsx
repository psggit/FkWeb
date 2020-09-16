import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import "./style.scss";
// import { AddMoreComponent } from "./addMore";
import { CartItemComponent } from "./cartItem";
import { EmptyCartComponent } from "./emptyCart";
import { CartHeaderComponent } from "./header";
import { BottomNextComponent } from "../common/bottomNext";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";
import { Alert } from "../common/alert";
import { BottomNavigationContainer } from "../common/bottomNavigation";
import { OrderSummaryComponent } from "../summary/components";
// import { OrderAddressComponent } from "../summary/components/OrderAddressComponent";

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
    <div>
      <BottomNextComponent
        isNav={true}
        title="Pay Now"
        onClickFunc={() => props.validateCart(validateParams)}
      />
    </div>
  );
}

//<OrderAddressComponent {...props} />

AlertValidateErrorComponent.propTypes = {
  closeValidationErrorMessage: PropTypes.func,
  validateErrorMessage: PropTypes.string,
};

function AlertValidateErrorComponent(props) {
  return (
    <Alert
      handleOption={() => props.closeValidationErrorMessage()}
      show={true}
      content={props.validateErrorMessage}
      option={"Ok"}
    />
  );
}

SummaryFailedComponent.propTypes = {
  summary: PropTypes.object,
};

function SummaryFailedComponent(props) {
  let fetchSummaryError = props.summary.fetchSummaryError;
  let fetchSummaryLocationError = props.summary.fetchSummaryLocationError;
  let message = props.summary.fetchSummaryErrorMessage;
  let [displayMessage, setDisplayMessage] = useState(true);

  let handleAction;
  if (fetchSummaryError) {
    handleAction = () => {
      setDisplayMessage(false);
      // setDisplayMessage(true);
    };
  } else if (fetchSummaryLocationError) {
    handleAction = () => {
      setDisplayMessage(false);
      // setDisplayMessage(true);
    };
  }

  if (displayMessage) {
    return (
      <Alert
        handleOption={handleAction}
        show={true}
        content={message}
        option={"Ok"}
      />
    );
  } else {
    return null;
  }
}

CartComponent.propTypes = {
  validationFailure: PropTypes.bool,
  validateError: PropTypes.bool,
  validationSuccessful: PropTypes.bool,
  validationInProgress: PropTypes.bool,
  fetchSummarySuccess: PropTypes.bool,
  fetchSummaryInProgress: PropTypes.bool,
  fetchSummaryFailed: PropTypes.bool,
  fetchSummaryLocationError: PropTypes.bool,
  fetchSummary: PropTypes.func,
  resetOnUnmount: PropTypes.func,
  summary: PropTypes.any,
  cartUpdate: PropTypes.bool,
};

function CartComponent(props) {
  let {
    fetchSummarySuccess,
    fetchSummaryInProgress,
    fetchSummaryFailed,
    fetchSummaryError,
    fetchSummaryLocationError,
  } = props.summary;

  const trigger = !(
    fetchSummarySuccess ||
    fetchSummaryFailed ||
    fetchSummaryInProgress
  );
  useEffect(() => {
    if (trigger) {
      props.fetchSummary(props);
    }
  });

  useEffect(() => {
    if (props.cartUpdate) {
      props.fetchSummary(props);
    }
  }, [props.cartUpdate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => props.resetOnUnmount();
  }, []);

  if (props.validationSuccessful) {
    return <Redirect to="/address/select/osm" push={true} />;
  }

  let isEmpty = props.isEmpty;
  let summary = props.summary.summaryDetails;

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
          {fetchSummarySuccess &&
          !fetchSummaryError &&
          !fetchSummaryLocationError ? (
            <OrderSummaryComponent summary={summary} />
          ) : null}
          {fetchSummaryError || fetchSummaryLocationError ? (
            <SummaryFailedComponent {...props} />
          ) : null}
        </div>
        <NextComponent {...props} />
      </div>

      <BottomNavigationContainer />
    </div>
  );
}

export { CartComponent };

//component missing in the design
//<AddMoreComponent retailer={props.retailer} />
