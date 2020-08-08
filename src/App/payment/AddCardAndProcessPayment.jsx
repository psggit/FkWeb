import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../common/toolbar";
import { EditText } from "../common/editText";
import { ButtonComponent } from "../common/bottomNext/BottomNextComponent";

NewCardInput.propTypes = {
  title: PropTypes.string, // Text about the input field
  className: PropTypes.string,
};

function NewCardInput(props) {
  return (
    <>
      <div className="input-component-label">{props.title}</div>
      <div
        className={
          props.className + " inputComponentField input_field_100 input"
        }
      ></div>
    </>
  );
}

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
          <NewCardInput title="CARD NUMBER" className="card_number_div" />
          <NewCardInput title="NAME ON CARD" className="name_on_card_div" />
          <NewCardInput title="EXPIRY MONTH" className="card_exp_month_div" />
          <NewCardInput title="EXPIRY YEAR" className="card_exp_year_div" />
          <NewCardInput title="CVV" className="security_code_div" />
          <input type="hidden" className="payment_method_type" value="CARD" />
          <input type="checkbox" className="juspay_locker_save" /> Save card
          <input type="hidden" className="redirect" value="true" />
          <ButtonComponent onClickFunc={onSubmit} title="Pay" />
        </form>
      </div>
    </>
  );
}

export { AddCardAndProcessPayment };
