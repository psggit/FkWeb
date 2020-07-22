import React from "react";
import PropTypes from "prop-types";

ArrivingComponent.propTypes = {
  arrivalTime: PropTypes.string,
  otp: PropTypes.string,
};

function ArrivingComponent(props) {
  const { arrivalTime, otp } = props;

  return (
    <>
      <div className="arrival-container">
        <div className="arrival-time">{arrivalTime}</div>
        <div className="otp-container">
          <div className="otp-title">OTP:</div>
          <div className="otp-number">{otp}</div>
        </div>
        <div className="keep-id-ready">keep your proof of ID ready</div>
        <div className="tell-a-friend-container">
          <div className="tell-a-friend">
            <div className="header">Tell a friend</div>
            <div className="content">Good news must be shared!</div>
          </div>
          <div className="invite-container">
            <div className="invite">Invite</div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ArrivingComponent };
