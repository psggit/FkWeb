import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { lockIcon } from "../../../assets/images";

import "../style.scss";

SavedCardComponent.propTypes = {
  payment: PropTypes.object,
  jpSavedCardsConf: PropTypes.func,
  paymentDetails: PropTypes.object,
};

function SavedCardComponent(props) {
  const payment = props.payment.paymentOptionsDetails;
  const paymentDetails = props.payment.paymentDetails;
  let juspay_form;

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form = props.jpSavedCardsConf(jp);
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

  return payment.cards.map((card, index) => {
    return (
      <>
        <form
          key={"card" + index}
          className="juspay_inline_form"
          id="payment_form"
        >
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
          <input
            type="hidden"
            className="payment_method_type"
            value="express"
          />
          <input type="hidden" className="redirect" value="true" />

          <input type="hidden" className="payment_method_type" value="CARD" />

          <input type="hidden" className="card_token" value={card.card_token} />
          <input type="hidden" className="card_isin" value={card.card_isin} />
          <div key={"dcard" + index} className="saved-card-container">
            <div className="card-details">
              <div className="card-number">
                <div className="card-mask">XXXX-XXXX-XXXX-</div>
                <div className="card-last-digits">
                  {card.card_number.split("-")[3]}
                </div>
              </div>
              <div className="card-expiry">
                {card.card_exp_month}/{card.card_exp_year}
              </div>
            </div>
            <div className="card-cvv-container">
              <img src={lockIcon} className="card-cvv-image" />
              <div
                type="text"
                id="cvvNumber"
                placeholder="CVV Number"
                className="card-cvv security_code_div"
              />
            </div>
          </div>
        </form>
        <button
          type="button"
          className="make_payment"
          onClick={() => onSubmit()}
        >
          Pay
        </button>
      </>
    );
  });
}

export { SavedCardComponent };
