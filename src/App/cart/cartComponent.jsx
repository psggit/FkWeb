import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Redirect, useHistory } from "react-router-dom";
import "./style.scss";

import { CartItemComponent } from "./cartItem";
import { EmptyCartComponent } from "./emptyCart";
import { CartHeaderComponent } from "./header";
import { BottomNextComponent } from "../common/bottomNext";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";
import { Alert } from "../common/alert";
import { BottomNavigationContainer } from "../common/bottomNavigation";
import { OrderSummaryComponent } from "../summary/components";
import { BottomAddressComponent } from "../address/components";
import { LoadingComponent } from "../common/loading";
import { CartVoucherComponent } from "./voucher";

RetryValidationComponent.propTypes = {
  products: PropTypes.object,
  retailer: PropTypes.object,
  fetchSummary: PropTypes.func,
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
      buttonFunc={() => props.fetchSummary(props)}
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
  fetchSummaryError: PropTypes.bool,
  fetchSummaryLocationError: PropTypes.bool,
  fnProceed: PropTypes.func,
  is_basic_details_required: PropTypes.bool,
  history: PropTypes.any,
};

function NextComponent(props) {
  const fnProceed = () => {
    if (props.is_basic_details_required) {
      props.history.push({
        pathname: "/user/userBasicInfo",
      });
    } else {
      props.history.push({
        pathname: "/payment/options",
      });
    }
  };
  return (
    <div>
      <BottomNextComponent
        isNav={true}
        inActive={props.fetchSummaryError || props.fetchSummaryLocationError}
        title="Pay Now"
        onClickFunc={() => fnProceed()}
      />
    </div>
  );
}

//<OrderAddressComponent {...props} />

AlertValidateErrorComponent.propTypes = {
  closeValidationErrorMessage: PropTypes.func,
  summary: PropTypes.object,
};

function AlertValidateErrorComponent(props) {
  return (
    <Alert
      handleOption={() => props.closeValidationErrorMessage()}
      show={true}
      content={props.summary.fetchSummaryErrorMessage}
      option={"Ok"}
    />
  );
}

SummaryFailedComponent.propTypes = {
  summary: PropTypes.object,
};

function SummaryFailedComponent(props) {
  let fetchSummaryError = props.fetchSummaryError;
  let message = props.fetchSummaryErrorMessage;
  let [displayMessage, setDisplayMessage] = useState(true);

  let handleAction;
  if (fetchSummaryError) {
    handleAction = () => {
      props.closeSummaryAlert();
      setDisplayMessage(false);
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
  fetchSummarySuccess: PropTypes.bool,
  fetchSummaryInProgress: PropTypes.bool,
  fetchSummaryFailed: PropTypes.bool,
  fetchSummary: PropTypes.func,
  resetOnUnmount: PropTypes.func,
  showAddAddress: PropTypes.func,
  summary: PropTypes.any,
  cartUpdate: PropTypes.bool,
  redirect: PropTypes.string,
  selectedAddress: PropTypes.object,
  fetchErrorMessageCount: PropTypes.number,
  fetchSummaryError: PropTypes.bool,
  fetchSummaryErrorMessage: PropTypes.string,
};

function CartComponent(props) {
  //
  if (!props.selectedAddress) {
    return <Redirect to="/stateCity" />;
  }
  const {
    fetchSummarySuccess,
    fetchSummaryInProgress,
    fetchSummaryFailed,
    fetchSummaryError,
    fetchErrorMessageCount,
  } = props;

  const trigger = !(
    fetchSummarySuccess ||
    fetchSummaryFailed ||
    fetchSummaryInProgress
  );

  useEffect(() => {
    if(props.fetchSummaryError === true) {
      props.resetPromo();
    }
  },[]);

  useEffect(() => {
    if (trigger) {
      props.fetchSummary(props);
      // props.closeValidationErrorMessage();
    }
  }, []);

  useEffect(() => {
    if (props.cartUpdate) {
      props.fetchSummary(props);
    }
  }, [props.cartUpdate]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => props.resetOnUnmount();
  }, []);

  useEffect(() => {
    props.fetchSummary(props)
    console.log("[PROPS]", props);
  },[]);

  const history = useHistory();
  let isEmpty = props.isEmpty;
  let summary = props.summary;

  if (isEmpty) {
    return <ReturnEmptyCart />;
  }

  if (fetchSummaryFailed) {
    return <RetryValidationComponent {...props} />;
  }

  if (props.fetchSummaryInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  }

  const showAddAddress = () => {
    history.push({
      pathname: "/address/select/osm",
      state: {
        address: null,
      },
    });
  };

  return (
    <div className="cart">
      <div className="full-cart show-content">
        <div className="padding-24">
          <CartHeaderComponent {...props} />
          <CartItems {...props} />
          <CartVoucherComponent {...props} />
          {fetchSummaryInProgress && <LoadingComponent />}
          {fetchSummaryError && fetchErrorMessageCount === 0 && (
            <SummaryFailedComponent {...props} />
          )}
          {fetchSummaryError && (
            <div className="error-container">
              <div className="cart-error">{props.fetchSummaryErrorMessage}</div>
            </div>
          )}
          {fetchSummarySuccess && !fetchSummaryError && (
            <OrderSummaryComponent summary={summary} />
          )}
        </div>
        <BottomAddressComponent {...props} showAddAddress={showAddAddress} />
        <NextComponent
          history={history}
          is_basic_details_required={
            summary ? summary.is_basic_details_required : false
          }
          fetchSummaryError={fetchSummaryError}
        />
      </div>

      <BottomNavigationContainer />
    </div>
  );
}

export { CartComponent };
