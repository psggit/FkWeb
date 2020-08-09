import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";
import { Alert } from "../common/alert";
import { AlertWithOptions } from "../common/alert";

//I have no idea how or why this works, love copy pasting code
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const retryHandler = (count, retry, error) => {
  const jitter = getRandomInt(1000, 3000);
  if (count === 0) {
    retry();
  } else if (count > 0 && count < 3) {
    setInterval(() => retry, jitter);
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
      title={props.payment.placeOrderErrorMessage}
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

VerifyComponent.propTypes = {
  payment: PropTypes.object,
  verifyPayment: PropTypes.func,
  verifyPaymentError: PropTypes.func,
  placeOrder: PropTypes.func,
  placeOrderError: PropTypes.func,
  takeMeHome: PropTypes.func,
  tryPayingAgain: PropTypes.func,
};

function VerifyComponent(props) {
  let payment = props.payment;
  let triggerVerifyPayment =
    !props.payment.verifyPaymentError &&
    !(
      props.payment.verifyPaymentInProgress ||
      props.payment.verifyPaymentSuccess ||
      props.payment.verifyPaymentFailed
    );

  let triggerPlaceOrder =
    props.payment.verifyPaymentSuccess &&
    !(
      props.payment.placeOrderInProgress ||
      props.payment.placeOrderSuccess ||
      props.payment.placeOrderFailed
    );

  useEffect(() => {
    if (triggerVerifyPayment) {
      retryHandler(
        payment.placeOrderRetryCount,
        () => {
          props.verifyPayment(props);
        },
        props.verifyPaymentError
      );
    }
    if (triggerPlaceOrder) {
      retryHandler(
        payment.placeOrderRetryCount,
        () => {
          props.placeOrder(props);
        },
        props.placeOrderError
      );
    }
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

  const history = useHistory();
  if (payment.takeMeHome) {
    history.push("/home");
  }
  if (payment.tryPayingAgain) {
    history.push("/payment/options");
  }

  return <div />;
}

export { VerifyComponent };
