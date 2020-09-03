import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../../common/toolbar";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

UPIVerifyComponent.propTypes = {
  payment: PropTypes.object,
  resetUPI: PropTypes.func,
};

function UPIVerifyComponent(props) {
  useEffect(() => {
    //  return () => {
    props.resetUPI();
    //};
  }, []);

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds}`;
  };

  function TimerComponent() {
    return (
      <CountdownCircleTimer
        onComplete={() => {}}
        isPlaying
        duration={100}
        colors="#e97c07"
      >
        {children}
      </CountdownCircleTimer>
    );
  }

  return (
    <>
      <ToolbarComponent helpVisibility={false} title="Complete Payment" />
      <div className="page-container">
        <div> 1. Open the UPI-linked mobile app</div>
        <div> 2. Check pending transactions</div>
        <div> 3. Complete payment </div>
        <TimerComponent />
        <div>Please complete payment before the timer runs out</div>
        <div>
          Please don&apos;t hit back button until the transaction is complete
        </div>
        <div className="button-container"></div>
      </div>
    </>
  );
}

export { UPIVerifyComponent };
