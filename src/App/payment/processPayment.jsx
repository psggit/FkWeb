import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";

import { ToolbarComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import { SplashLoadingComponent } from "../common/splashLoading";

import "./style.scss";

ProcessPayment.propTypes = {
  bank: PropTypes.any,
  payment: PropTypes.object,
  initialise: PropTypes.func,
};

function SavedCardPayment() {
  return (
    <>
      <form className="juspay_inline_form" id="payment_form1">
        <input type="hidden" className="merchant_id" value="hipbar" />
        <input type="hidden" className="order_id" value="guest_order" />
        <input type="hidden" className="card_token" />
        <input type="hidden" className="card_isin" />
        <div className="security_code_div"></div>
        <input type="radio" className="auth_type" value="" name="auth_type" />
        Verify with Secure Password
        <input type="hidden" className="redirect" value="true" />
      </form>
      <button type="button" className="make_payment">
        Pay
      </button>
    </>
  );
}

function ProcessPayment(props) {
  useLayoutEffect(() => {
    if (props.payment.initialTrigger) {
      props.initialise(props);
    }
  });

  return (
    <>
      <ToolbarComponent helpVisibility={false} title="Payment" />
      <div className="page-container payment-option-container">
        <SavedCardPayment />
        <BottomNextComponent routePath={"/order/placed"} title="Pay" />
      </div>
    </>
  );
}

export { ProcessPayment };
