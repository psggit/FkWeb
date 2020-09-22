import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { JpWalletComponent } from "./JpWalletComponent";
import "../style.scss";

let juspay_form = [];
const walletDisplayCount = 4;

WalletFormComponent.propTypes = {
  index: PropTypes.number,
  payment: PropTypes.object,
  jpLoaded: PropTypes.bool,
  wallet: PropTypes.object,
  jpWalletConf: PropTypes.func,
};

function WalletFormComponent(props) {
  const paymentDetails = props.payment.paymentDetails;
  const wallet = props.wallet;
  const jpLoaded = props.jpLoaded;

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form[props.index] = props.jpWalletConf(jp, props.index);
  };

  useEffect(() => {
    if (jpLoaded) {
      configureJuspay();
    }
  }, [jpLoaded]);

  const onSubmit = (index) => {
    juspay_form[index].submit_form();
  };

  return (
    <form
      className="juspay_inline_form"
      id={"wallet_payment_form" + props.index}
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
      <input type="hidden" className="payment_method_type" value="WALLET" />
      <select className="payment_method hide-content">
        <option
          key={wallet.payment_method}
          value={wallet.payment_method}
          label={wallet.description}
          className="options"
        >
          {wallet.description}
        </option>
      </select>
      <div className="make_payment bank" onClick={() => onSubmit(props.index)}>
        <img className="image" src={wallet.image_url} />
        <div className="name">{wallet.description}</div>
      </div>
      <input type="hidden" className="redirect" value="true" />
    </form>
  );
}

function WalletList(props) {
  const wallets = props.payment.paymentOptionsDetails.wallets;

  const getTopWallets = () => {
    var topWallets = wallets.slice(0, walletDisplayCount);
    return topWallets;
  };

  return getTopWallets().map((wallet, index) => {
    const formProps = {
      wallet: wallet,
      index: index,
      jpWalletConf: props.jpWalletConf,
      payment: props.payment,
      jpLoaded: props.jpLoaded,
    };
    return (
      <div key={"form_" + wallet.payment_method}>
        {WalletFormComponent(formProps)}
      </div>
    );
  });
}

WalletComponent.propTypes = {
  payment: PropTypes.object,
  jpLoaded: PropTypes.bool,
  jpWalletConf: PropTypes.func,
};

function WalletComponent(props) {
  const wallets = props.payment.paymentOptionsDetails.wallets;

  return (
    <div className="payment-list-container">
      <div className="title">Wallets</div>
      <div className="list-container">{WalletList(props)}</div>
      {wallets.length > walletDisplayCount && (
        <div className="sub-title">Other wallets</div>
      )}

      {wallets.length > walletDisplayCount && <JpWalletComponent {...props} />}
    </div>
  );
}

export { WalletComponent };
