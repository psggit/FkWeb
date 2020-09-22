import React, { useEffect } from "react";
import "../style.scss";
import PropTypes from "prop-types";

let juspay_form;
const walletDisplayCount = 4;

JpWalletComponent.propTypes = {
  jpWalletConf: PropTypes.func,
  payment: PropTypes.object,
  jpLoaded: PropTypes.bool,
  wallets: PropTypes.any,
};

function JpWalletComponent(props) {
  const paymentDetails = props.payment.paymentDetails;
  const wallets = props.payment.paymentOptionsDetails.wallets;
  const jpLoaded = props.jpLoaded;

  const getWallets = () => {
    var tempWallets = wallets.slice(walletDisplayCount, wallets.length);
    return tempWallets;
  };

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form = props.jpWalletConf(jp, 100003);
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
    <div className="list-wrapper wallet-margin">
      <form className="juspay_inline_form" id={"wallet_payment_form" + 100003}>
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
          <select className="payment_method select minimal">
            {getWallets().map((wallet) => (
              <option
                key={wallet.payment_method}
                value={wallet.payment_method}
                label={wallet.description}
                className="options"
              >
                {wallet.description}
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
  );
}

export { JpWalletComponent };
