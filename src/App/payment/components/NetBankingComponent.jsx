import React, { useEffect } from "react";
import { downArrowIcon } from "../../../assets/images";
import "../style.scss";
import PropTypes from "prop-types";

NetBankingComponent.propTypes = {
  payment: PropTypes.object,
  jpLoaded: PropTypes.bool,
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

let juspay_form;

function NetBankingComponent(props) {
  const paymentDetails = props.payment.paymentDetails;
  const jpLoaded = props.jpLoaded;
  const { banks } = props;

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form = props.jpNetBankingConf(jp);
  };

  useEffect(() => {
    if (jpLoaded) {
      configureJuspay();
    }
  }, [jpLoaded]);

  const onSubmit = () => {
    juspay_form.submit_form();
  };

  return (
    <div className="payment-list-container">
      <div className="title">Net Banking</div>
      <div className="sub-title">Choose one of the banks below</div>
      <div className="list-wrapper nb-margin">
        <form className="juspay_inline_form " id="nb_payment_form">
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
          <div className="list-container ">
            <select className="payment_method select minimal">
              {banks.map((bank) => (
                <option
                  key={bank.payment_method}
                  value={bank.payment_method}
                  className="options"
                >
                  {bank.description}
                </option>
              ))}
            </select>

            <div
              type="submit"
              className="make_payment nb-pay-button"
              onClick={() => onSubmit()}
            >
              PAY
            </div>
          </div>
          <input type="hidden" className="redirect" value="true" />
        </form>
      </div>
    </div>
  );
}

export { NetBankingComponent };
