import React, { useEffect } from "react";
import PropTypes from "prop-types";
import config from "../../../config";
import "../style.scss";

WalletComponent.propTypes = {
  payment: PropTypes.object,
  jpWalletConf: PropTypes.func,
};

let juspay_form;

function WalletComponent(props) {
  const paymentDetails = props.payment.paymentDetails;

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form = props.jpWalletConf(jp);
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src = config.JusPayScript;
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
    juspay_form.submit_form();
  };

  return (
    <div className="payment-list-container">
      <div className="title">Wallets</div>

      <form className="juspay_inline_form" id="wallet_payment_form">
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
        <input type="hidden" className="payment_method_type" value="WALLET" />
        <div className="list-container">
          <select className="payment_method select">
            <option
              value="FREECHARGE"
              label="Freecharge Wallet"
              className="options"
            >
              Freecharge Wallet
            </option>
            <option value="SBIBUDDY" label="SBI Buddy">
              SBI Buddy
            </option>
          </select>
        </div>
        <div
          type="submit"
          className="make_payment nb-pay-button"
          onClick={() => onSubmit()}
        >
          Pay via Wallet
        </div>
        <input type="hidden" className="redirect" value="true" />
      </form>
    </div>
  );
}

export { WalletComponent };
