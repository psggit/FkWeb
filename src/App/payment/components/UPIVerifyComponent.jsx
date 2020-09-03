import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../../common/toolbar";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

UPIVerifyComponent.propTypes = {
  payment: PropTypes.object,
  resetUPI: PropTypes.func,
};

function UPIVerifyComponent(props) {
  const paymentOptionsDetails = props.payment.paymentOptionsDetails;

  useEffect(() => {
    //  return () => {
    props.resetUPI();
    //};
  }, []);

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
            console.log("Timer");
          }}
          isPlaying
          size={140}
          strokeWidth={8}
          strokeLinecap="square"
          rotation="clockwise"
          duration={paymentOptionsDetails.upi_time_limit}
          colors="#e97c07"
        >
          {children}
        </CountdownCircleTimer>
      </div>
    );
  }

  return (
    <>
      <ToolbarComponent helpVisibility={false} title="Complete Payment" />
      <div className="page-container upi-verify-container">
        <div className="msg"> 1. Open the UPI-linked mobile app</div>
        <div className="msg"> 2. Check pending transactions</div>
        <div className="msg"> 3. Complete payment </div>
        <TimerComponent />
        <div className="note">
          Please complete payment before the timer runs out
        </div>
        <div className="note">
          Please don&apos;t hit back button until the transaction is complete
        </div>
        <div className="button-container"></div>
      </div>
    </>
  );
}

export { UPIVerifyComponent };
