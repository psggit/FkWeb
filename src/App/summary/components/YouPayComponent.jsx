import React from 'react';
import PropTypes from "prop-types";

YouPayComponent.propTypes = {
  toPay: PropTypes.any,
};

function YouPayComponent(props) {
  const toPay = props.toPay;
  return (
    <div className="you-pay-container">
      <div>You Pay</div>
      <div>{toPay}</div>
    </div>
  );
}

export default YouPayComponent;
