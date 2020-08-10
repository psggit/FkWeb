import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../../common/toolbar";
import { ButtonComponent } from "../../common/bottomNext/BottomNextComponent";

NewCardInput.propTypes = {
  title: PropTypes.string, // Text about the input field
  className: PropTypes.string,
};

function NewCardInput(props) {
  return (
    <>
      <div className="input-component-label new-card-margin">{props.title}</div>
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
  cancelAddNewCard: PropTypes.func,
};

let juspay_form;
function AddCardAndProcessPayment(props) {
  const paymentDetails = props.payment.paymentDetails;

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
  }, []);

  const onSubmit = () => {
    juspay_form.submit_form();
  };

  return (
    <>
      <ToolbarComponent
        onClick={() => props.cancelAddNewCard()}
        helpVisibility={false}
        title="Payment"
      />
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
          <NewCardInput
            title="EXPIRY MONTH (MM)"
            className="card_exp_month_div"
          />
          <NewCardInput
            title="EXPIRY YEAR (YY)"
            className="card_exp_year_div"
          />
          <NewCardInput title="CVV" className="security_code_div" />
          <input type="hidden" className="payment_method_type" value="CARD" />
          <input type="hidden" className="redirect" value="true" />
          <div className="save-card-container">
            <input
              type="checkbox"
              className="juspay_locker_save save-card-option"
            />{" "}
            <div className="save-card-title">
              Save this card for faster checkouts
            </div>
          </div>
          <div className="button-container">
            <ButtonComponent onClickFunc={onSubmit} title="Pay" />
          </div>
        </form>
      </div>
    </>
  );
}

export { AddCardAndProcessPayment };
