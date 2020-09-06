import React, { useLayoutEffect, useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../common/toolbar";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useParams, useHistory } from "react-router-dom";
import { Alert, AlertWithOptions } from "../common/alert";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";

UPIVerifyComponent.propTypes = {
  payment: PropTypes.object,
  resetUPI: PropTypes.func,
  verifyUpiPayment: PropTypes.func,
  updateUpiRemainingTime: PropTypes.func,
  showUPITimeOut: PropTypes.func,
  showUPICancel: PropTypes.func,
  resetVerifyUPIPaymentOnUnmount: PropTypes.func,
};

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

let triggerPlaceOrder = (props, oid, txn_id) => {
  let payment = props.payment;

  let trigger =
    payment.verifyUpiPaymentSuccess &&
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

RetryComponent.propTypes = {
  payment: PropTypes.object,
  verifyUpiPayment: PropTypes.func,
  placeOrder: PropTypes.func,
};

function RetryComponent(props) {
  let retryAction = props.placeOrder;

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

let intervalId;

function UPIVerifyComponent(props) {
  let payment = props.payment;

  const interval = 5000;

  const timeLimit = useParams().time_limit;
  const txnId = useParams().txn_id;
  const orderId = useParams().order_id;
  const upiRemainingTime = payment.upiRemainingTime;

  const history = useHistory();
  if (props.payment.takeMeHome) {
    history.push("/home");
  }

  if (props.payment.tryPayingAgain) {
    history.push("/order/summary");
  }

  if (props.payment.placeOrderSuccess) {
    history.push("/order/placed");
  }

  useEffect(() => {
    props.resetUPI();
    verifyPayment();
    return () => {
      cancelTimer();
      props.resetVerifyUPIPaymentOnUnmount();
    };
  }, []);

  useEffect(() => {
    if (payment.verifyUpiPaymentSuccess) {
      cancelTimer();
      triggerPlaceOrder(props, orderId, txnId);
    }
  }, [payment.verifyUpiPaymentSuccess]);

  useEffect(() => {
    triggerPlaceOrder(props, orderId, txnId);
  });

  useLayoutEffect(() => {
    if (payment.upiRemainingTime < 0) {
      cancelTimer();
    }
  }, [payment.upiRemainingTime]);

  function cancelTimer() {
    clearInterval(intervalId);
  }

  function verifyPayment() {
    intervalId = setInterval(() => {
      props.verifyUpiPayment(txnId);
      props.updateUpiRemainingTime();
    }, interval);
  }

  function formatToConsistency(number) {
    return String(number).padStart(2, "0");
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${formatToConsistency(minutes)}:${formatToConsistency(seconds)}`;
  };

  function TimerComponent() {
    return (
      <div className="timer">
        <CountdownCircleTimer
          onComplete={() => {
            if (props.payment.showTimeOutCount < 2) {
              cancelTimer();
              props.showUPITimeOut(true);
            }
            return [false, 1000000];
          }}
          isPlaying
          size={140}
          strokeWidth={8}
          strokeLinecap="square"
          rotation="clockwise"
          duration={upiRemainingTime <= 0 ? 0 : timeLimit}
          initialRemainingTime={upiRemainingTime}
          colors="#e97c07"
        >
          {children}
        </CountdownCircleTimer>
      </div>
    );
  }

  const handleUPICancel = () => {
    cancelTimer();
    history.goBack();
  };

  const handleUPIdismiss = () => {
    props.showUPICancel(false);
  };

  const handleUPITimeOut = () => {
    cancelTimer();
    history.goBack();
  };

  function UpiCancel() {
    return (
      <AlertWithOptions
        handleOption1={handleUPICancel}
        handleOption2={handleUPIdismiss}
        show={true}
        title="Cancel Confirmation"
        content="UPI payment authorization time has expired. Please re-initiate the transaction and complete payment before the timer runs out"
        option1="Yes"
        option2="No"
      />
    );
  }

  function UpiTimeOut() {
    return (
      <Alert
        handleOption={handleUPITimeOut}
        show={true}
        title="UPI Payment"
        content="UPI payment authorization time has expired. Please re-initiate the transaction and complete payment before the timer runs out"
        option="Okay"
      />
    );
  }

  if (payment.placeOrderInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  }

  if (payment.placeOrderFailed) {
    return <RetryComponent {...props} />;
  }

  if (payment.placeOrderError) {
    return <OrderFailedComponent {...props} />;
  }

  return (
    <>
      <ToolbarComponent
        onClick={() => props.showUPICancel(true)}
        helpVisibility={false}
        title="Complete Payment"
      />
      <div className="page-container upi-verify-container">
        <div className="msg"> 1. Open the UPI-linked mobile app</div>
        <div className="msg"> 2. Check pending transactions</div>
        <div className="msg"> 3. Complete payment </div>
        <TimerComponent />
        <div className="note">Please complete payment before the timer</div>
        <div className="note">
          runs out and please don&apos;t hit back button
        </div>
        <div className="note">until the transaction is complete</div>
      </div>
      {payment.showUPICancel ? <UpiCancel /> : null}
      {payment.showUPITimeOut ? <UpiTimeOut /> : null}
      <div className="upi-cancel-container">
        <div className="cancel" onClick={() => props.showUPICancel(true)}>
          CANCEL
        </div>
      </div>
    </>
  );
}

export { UPIVerifyComponent };
