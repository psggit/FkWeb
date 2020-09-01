import React, { useEffect } from "react";
import PropTypes from "prop-types";
import config from "../../../config";

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
    <div>
      <div>Wallets</div>

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
        <select className="payment_method">
          <option value="FREECHARGE" label="Freecharge Wallet">
            Freecharge Wallet
          </option>
          <option value="SBIBUDDY" label="SBI Buddy">
            SBI Buddy
          </option>
        </select>
        <button
          type="submit"
          className="make_payment"
          onClick={() => onSubmit()}
        >
          Pay
        </button>
        <input type="hidden" className="redirect" value="true" />
      </form>
    </div>
  );
}

export { WalletComponent };
