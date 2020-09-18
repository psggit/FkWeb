import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";
import { Alert } from "../common/alert";
import { AlertWithOptions } from "../common/alert";

import { useParams, useLocation } from "react-router-dom";

//I have no idea how or why this works, love copy pasting code
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const retryHandler = (count, inProgress, retry, error) => {
  const jitter = getRandomInt(1000, 3000);
  if (count === 0) {
    inProgress();
    retry();
  } else if (count > 0 && count < 3) {
    inProgress();
    setTimeout(retry, jitter);
  } else {
    error();
  }
};

PaymentFailedComponent.propTypes = {
  takeMeHome: PropTypes.func,
  tryPayingAgain: PropTypes.func,
  payment: PropTypes.object,
};

function PaymentFailedComponent(props) {
  return (
    <AlertWithOptions
      title={"Payment Failed"}
      content={props.payment.verifyPaymentErrorMessage}
      option1={"CANCEL"}
      option2={"TRY AGAIN"}
      handleOption1={props.takeMeHome}
      handleOption2={props.tryPayingAgain}
    />
  );
}

OrderFailedComponent.propTypes = {
  takeMeHome: PropTypes.func,
  tryPayingAgain: PropTypes.func,
  payment: PropTypes.object,
};

function OrderFailedComponent(props) {
  return (
    <Alert
      handleOption={props.takeMeHome}
      show={true}
      content={props.payment.placeOrderErrorMessage}
      option={"Ok"}
    />
  );
}

RetryComponent.propTypes = {
  payment: PropTypes.object,
  verifyPayment: PropTypes.func,
  placeOrder: PropTypes.func,
};

function RetryComponent(props) {
  let retryAction;
  if (props.payment.verifyPaymentFailed) {
    retryAction = props.verifyPayment;
  } else if (props.payment.placeOrderFailed) {
    retryAction = props.placeOrder;
  }
  return (
    <SplashLoadingComponent
      motion={false}
      icon={drinksIcon}
      text="Something went wrong, please try again."
      buttonFunc={() => retryAction(props)}
      buttonText="Retry"
    />
  );
}

let triggerVerifyPayment = (props, oid, txn_id) => {
  let payment = props.payment;
  let trigger =
    !payment.verifyPaymentError &&
    !(
      payment.verifyPaymentInProgress ||
      payment.verifyPaymentSuccess ||
      payment.verifyPaymentFailed
    );

  if (trigger) {
    retryHandler(
      payment.paymentRetryCount,
      props.verifyPaymentInProgress,
      () => {
        props.verifyPayment(txn_id);
      },
      props.verifyPaymentError
    );
  }
};

let triggerPlaceOrder = (props, oid, txn_id) => {
  let payment = props.payment;
  let trigger =
    payment.verifyPaymentSuccess &&
    !payment.placeOrderError &&
    !(
      payment.placeOrderInProgress ||
      payment.placeOrderSuccess ||
      payment.placeOrderFailed
    );
  if (trigger) {
    retryHandler(
      payment.placeOrderRetryCount,
      props.placeOrderInProgress,
      () => {
        props.placeOrder(oid, txn_id);
      },
      props.placeOrderError
    );
  }
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

VerifyComponent.propTypes = {
  payment: PropTypes.object,
  verifyPayment: PropTypes.func,
  verifyPaymentError: PropTypes.func,
  placeOrder: PropTypes.func,
  placeOrderError: PropTypes.func,
  takeMeHome: PropTypes.func,
  tryPayingAgain: PropTypes.func,
  resetVerifyPaymentOnUnmount: PropTypes.func,
};

function VerifyComponent(props) {
  const oid = useParams().order_id;
  const txn_id = useQuery().get("order_id");

  let payment = props.payment;

  const history = useHistory();
  if (payment.takeMeHome) {
    history.push("/home");
  }
  if (payment.tryPayingAgain) {
    history.push("/cart");
  }
  if (payment.placeOrderSuccess) {
    history.push("/order/placed");
  }

  useEffect(() => {
    props.resetVerifyPaymentOnUnmount;
  }, []);

  useEffect(() => {
    triggerVerifyPayment(props, oid, txn_id);
    triggerPlaceOrder(props, oid, txn_id);
  });

  if (payment.verifyPaymentInProgress || payment.placeOrderInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  }

  if (props.payment.verifyPaymentFailed || props.payment.placeOrderFailed) {
    return <RetryComponent {...props} />;
  }

  if (payment.verifyPaymentError) {
    return <PaymentFailedComponent {...props} />;
  }

  if (payment.placeOrderError) {
    return <OrderFailedComponent {...props} />;
  }

  return <div />;
}

export { VerifyComponent };
