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
  summaryDetails: PropTypes.object,
};

function CardPayment() {
  return (
    <form className="juspay_inline_form" id="payment_form">
      <input type="hidden" className="merchant_id" value="guest" />
      <input type="hidden" className="order_id" value="guest_order" />
      <div className="card_number_div"></div>
      <div className="name_on_card_div"></div>
      <div className="card_exp_month_div"></div> -{" "}
      <div className="card_exp_year_div"></div>
      <div className="security_code_div"></div>
      <input type="checkbox" className="juspay_locker_save" /> Save card
      information
      <input type="hidden" className="redirect" value="true" />
      <input
        type="radio"
        className="auth_type"
        value=""
        name="auth_type"
      />{" "}
      Verify with Secure Password
      <input
        type="radio"
        className="auth_type"
        value="ATMPIN"
        name="auth_type"
      />{" "}
      Verify with ATM PIN
      <button type="submit" id="common_pay_btn">
        Make Payment
      </button>
    </form>
  );
}

function SavedCardPayment() {
  return (
    <>
      <form className="juspay_inline_form" id="payment_form1">
        <input type="hidden" className="merchant_id" value="guest" />
        <input type="hidden" className="order_id" value="guest_order" />
        <input type="hidden" className="card_token" />
        <input type="hidden" className="card_isin" />
        <div className="security_code_div"></div>
        <input
          type="radio"
          className="auth_type"
          value=""
          name="auth_type"
        />{" "}
        Verify with Secure Password
        <input
          type="radio"
          className="auth_type"
          value=""
          name="auth_type"
        />{" "}
        Verify with ATM PIN
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
      <ToolbarComponent helpVisibility="true" title="Payment" />
      <div className="page-container payment-option-container">
        <SavedCardPayment />
        <BottomNextComponent routePath={"/order/placed"} title="Pay" />
      </div>
    </>
  );
}

export { ProcessPayment };
