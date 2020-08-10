import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { upiIcon } from "../../../assets/images";
import { UPILowSuccessRate } from "./UPILowSuccessRate";

import "../style.scss";

UPIComponent.propTypes = {
  payment: PropTypes.object,
  jpUpiConf: PropTypes.func,
  paymentDetails: PropTypes.object,
};

let juspay_form;

function UPIComponent(props) {
  const paymentDetails = props.payment.paymentDetails;

  const [payEnabled, SetPayEnabled] = useState(false);

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form = props.jpUpiConf(jp);
    console.log(juspay_form);
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://sandbox.juspay.in/pay-v3.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = configureJuspay;
    document.body.appendChild(script);

    /*
    return () => {
      document.body.removeChild(script);
    };
	  */
  }, []);

  const onSubmit = () => {
    console.log(juspay_form);
    juspay_form.submit_form();
  };

  const onTextChanged = (val) => {
    console.log(val);
    SetPayEnabled(val.length > 0);
  };

  return (
    <form className="juspay_inline_form" id="upi_payment_form">
      <input
        type="hidden"
        className="merchant_id"
        value={paymentDetails.merchant_id}
      />

      <input
        type="hidden"
        className="order_id"
        value={paymentDetails.order_id}
      />
      <input type="hidden" className="payment_method_type" value="UPI" />
      <input type="hidden" className="payment_method" value="UPI" />
      <input type="hidden" className="txn_type" value="UPI_COLLECT" />

      <div className="upi-component">
        <img src={upiIcon} className="upi-image" />
        <div className="upi-details">
          {props.payment.is_upi_low_success_rate && <UPILowSuccessRate />}
          <div className="upi-field-container">
            <input
              type="radio"
              name="upiradio"
              id="upiradioinput"
              className="upi-radio"
            />
            <div className="upi-id">
              <input
                type="text"
                placeholder="Enter your UPI ID"
                className="upi_vpa vpa-input"
                onChange={(e) => onTextChanged(e.target.value)}
              />
              <div
                type="submit"
                className={
                  (payEnabled ? "show-content" : "hide-content") +
                  " make_payment pay-button"
                }
                onClick={() => onSubmit()}
              >
                PAY
              </div>
            </div>
            <input type="hidden" className="redirect" value="true" />
          </div>
        </div>
      </div>
    </form>
  );
}

export { UPIComponent };
