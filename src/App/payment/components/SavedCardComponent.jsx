import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import config from "../../../config";

import { lockIcon } from "../../../assets/images";

import "../style.scss";

SavedCardComponent.propTypes = {
  payment: PropTypes.object,
  jpSavedCardsConf: PropTypes.func,
  paymentDetails: PropTypes.object,
  savedCardValid: PropTypes.object,
};

let juspay_forms = [];

Form.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  paymentDetails: PropTypes.object,
  jpSavedCardsConf: PropTypes.func,
  jpLoaded: PropTypes.bool,
};

function Form(props) {
  const { jpLoaded } = props;

  const configureJuspay = () => {
    let jp = window.Juspay;
    var form = props.jpSavedCardsConf(jp, props.index);
    juspay_forms[props.index] = form;
  };

  useLayoutEffect(() => {
    if (jpLoaded) {
      configureJuspay();
    }
  }, [jpLoaded]);

  return (
    <form
      key={props.card.card_token}
      className="juspay_inline_form card-form"
      id={"payment_form" + props.index}
    >
      <input
        type="hidden"
        className="merchant_id"
        value={props.paymentDetails.merchant_id}
      />

      <input
        type="hidden"
        className="order_id"
        value={props.paymentDetails.order_id}
      />
      <input type="hidden" className="payment_method_type" value="express" />
      <input type="hidden" className="redirect" value="true" />

      <input type="hidden" className="payment_method_type" value="CARD" />

      <input
        type="hidden"
        className="card_token"
        value={props.card.card_token}
      />
      <input type="hidden" className="card_isin" value={props.card.card_isin} />
      <div
        type="text"
        id="cvvNumber"
        placeholder="CVV Number"
        className="card-cvv security_code_div"
      />
    </form>
  );
}

function SavedCardComponent(props) {
  const payment = props.payment.paymentOptionsDetails;

  const [jpLoaded, SetjpLoaded] = useState(false);

  useLayoutEffect(() => {
    const script = document.createElement("script");

    script.src = config.JusPayScript;
    script.type = "text/javascript";
    script.async = false;
    script.onload = () => SetjpLoaded(true);
    document.body.appendChild(script);
  }, []);

  const onSubmit = (index) => {
    var selectedForm = juspay_forms[index];
    selectedForm.submit_form();
  };

  function showPayCss(index) {
    if (
      props.payment.savedCardValid &&
      index == props.payment.savedCardValid.index &&
      props.payment.savedCardValid.isValid
    ) {
      return "show-content make_payment card-pay-button";
    } else {
      return "hide-content make_payment card-pay-button";
    }
  }

  return payment.cards.map((card, index) => {
    const formProps = {
      card: card,
      index: index,
      jpSavedCardsConf: props.jpSavedCardsConf,
      paymentDetails: props.payment.paymentDetails,
      jpLoaded: jpLoaded,
    };
    return (
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
          <Form {...formProps} />
          <div
            type="button"
            className={showPayCss(index)}
            onClick={() => onSubmit(index)}
          >
            PAY
          </div>
        </div>
      </div>
    );
  });
}

export { SavedCardComponent };
