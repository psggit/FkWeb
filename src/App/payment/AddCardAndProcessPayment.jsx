import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../common/toolbar";
import { EditText } from "../common/editText";
import { ButtonComponent } from "../common/bottomNext/BottomNextComponent";

AddCardAndProcessPayment.propTypes = {
  bank: PropTypes.any,
  payment: PropTypes.object,
  initialise: PropTypes.func,
  summaryDetails: PropTypes.object,
  createPayment: PropTypes.func,
  jpNewCardConf: PropTypes.func,
};

function AddCardAndProcessPayment(props) {
  const paymentDetails = props.payment.paymentDetails;
  let juspay_form;

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form = props.jpNewCardConf(jp);
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

  const jp_success = (response) => {
    console.log(response);
  };
  const jp_error = (response) => {
    console.log(response);
  };

  const onSubmit = () => {
    console.log(juspay_form);
    juspay_form.tokenize({
      success_handler: jp_success,
      error_handler: jp_error,
    });
    juspay_form.submit_form();
  };
  return (
    <>
      <ToolbarComponent helpVisibility="false" title="Payment" />
      <div className="page-container">
        <form className="juspay_inline_form" id="new_card_payment_form">
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
          <div className="input_field_100 card_number_div"></div>
          <div className="input_field_100 name_on_card_div"></div>
          <div className="input_field_100 card_exp_month_div"></div> -{" "}
          <div className="input_field_100 card_exp_year_div"></div>
          <div className="input_field_100 security_code_div"></div>
          <input type="hidden" className="payment_method_type" value="CARD" />
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
        <EditText
          title="CARD NUMBER"
          id="cardNumber"
          inputMode="numeric"
          autoComplete="section-cc cc-number"
          maxLength="20"
        />
        <EditText
          title="EXPIRY DATE (MM/YY)"
          id="expiryDate"
          inputType="month"
          autoComplete="section-cc cc-exp"
        />
        <EditText
          title="CVV"
          id="cvvNumber"
          inputType="password"
          inputMode="numeric"
          autoComplete="section-cc cc-csc"
          maxLength="4"
        />
        <EditText
          title="NAME ON CARD"
          id="nameOfCard"
          inputType="text"
          autoComplete="section-cc cc-name"
          maxLength="30"
        />
        <ButtonComponent
          onClickFunc={onSubmit}
          routePath={"/order/placed"}
          title="Pay"
        />
      </div>
    </>
  );
}

export { AddCardAndProcessPayment };
