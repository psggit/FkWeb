import React, { useEffect } from "react";
import { downArrowIcon } from "../../../assets/images";
import "../style.scss";
import PropTypes from "prop-types";

NetBankingComponent.propTypes = {
  payment: PropTypes.object,
  jpNetBankingConf: PropTypes.func,
  banks: PropTypes.any,
  onBankSelected: PropTypes.any,
  onOtherBankSelected: PropTypes.any,
};

OtherBanksComponent.propTypes = {
  onOtherBankSelected: PropTypes.func,
};

function OtherBanksComponent(props) {
  return (
    <div className="other-banks" onClick={props.onOtherBankSelected}>
      <div className="other-bank-title">Other Banks</div>
      <img src={downArrowIcon} className="down-image" />
    </div>
  );
}

BankComponent.propTypes = {
  bank: PropTypes.object,
  onBankSelected: PropTypes.func,
};

function BankComponent(props) {
  return (
    <div
      className="bank"
      id={props.bank.payment_method}
      value={props.bank.payment_method}
      onClick={props.onBankSelected}
    >
      <img src={props.bank.image_url} className="image" />
      <div className="name">{props.bank.description}</div>
    </div>
  );
}

function NetBankingComponent(props) {
  const paymentDetails = props.payment.paymentDetails;
  const { banks, onBankSelected } = props;

  let juspay_form;

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form = props.jpNetBankingConf(jp);
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

  return (
    <div className="net-banking-container">
      <div className="title">Net Banking</div>
      <form className="juspay_inline_form" id="nb_payment_form">
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
        <input type="hidden" className="payment_method_type" value="NB" />
        <div className="bank-list-container">
          <select className="payment_method nb-select">
            {banks.map((bank) => (
              <option
                key={bank.payment_method}
                value={bank.payment_method}
                label={bank.description}
                className="nb-options"
              ></option>
            ))}
          </select>
        </div>

        <div
          type="submit"
          className="make_payment nb-pay-button"
          onClick={() => onSubmit()}
        >
          Pay via Net Banking
        </div>
        <input type="hidden" className="redirect" value="true" />
      </form>
    </div>
  );
}

export { NetBankingComponent };
