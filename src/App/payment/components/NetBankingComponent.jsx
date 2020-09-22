import React, { useEffect } from "react";
import { downArrowIcon } from "../../../assets/images";
import "../style.scss";
import PropTypes from "prop-types";
import { JpBanksComponent } from "./JpBankscomponent";

let juspay_form = [];
let nbDisplayCount = 4;

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

BankFormComponent.propTypes = {
  jpNetBankingConf: PropTypes.func,
  index: PropTypes.number,
  payment: PropTypes.object,
  bank: PropTypes.object,
  jpLoaded: PropTypes.bool,
};

function BankFormComponent(props) {
  const { bank } = props;
  const paymentDetails = props.payment.paymentDetails;
  const jpLoaded = props.jpLoaded;

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form[props.index] = props.jpNetBankingConf(jp, props.index);
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
    <form className="juspay_inline_form" id={"nb_payment_form" + props.index}>
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
      <select className="payment_method hide-content">
        <option
          key={"opt_" + bank.payment_method}
          value={bank.payment_method}
          className="options"
        ></option>
      </select>
      <div
        className="bank make_payment"
        id={props.bank.payment_method}
        onClick={() => onSubmit(props.index)}
      >
        <img src={props.bank.image_url} className="image" />
        <div className="name">{props.bank.description}</div>
      </div>

      <input type="hidden" className="redirect" value="true" />
    </form>
  );
}

function BankList(props, from, to) {
  const { banks } = props;

  const getTopBanks = () => {
    var topBanks = [];
    if (banks.length > to) {
      topBanks = banks.slice(from, to);
    }
    return topBanks;
  };

  return getTopBanks().map((bank, index) => {
    const formProps = {
      bank: bank,
      index: index,
      jpNetBankingConf: props.jpNetBankingConf,
      payment: props.payment,
      jpLoaded: props.jpLoaded,
    };
    return (
      <div key={"form_" + bank.payment_method}>
        {BankFormComponent(formProps)}
      </div>
    );
  });
}

NetBankingComponent.propTypes = {
  payment: PropTypes.object,
  jpLoaded: PropTypes.bool,
  jpNetBankingConf: PropTypes.func,
  banks: PropTypes.any,
  onBankSelected: PropTypes.any,
  onOtherBankSelected: PropTypes.any,
};

function NetBankingComponent(props) {
  return (
    <div className="payment-list-container">
      <div className="title">Net Banking</div>
      <div className="list-container">{BankList(props, 0, 4)}</div>
      <div className="list-container">{BankList(props, 4, 8)}</div>
      <div className="sub-title">Other banks</div>
      <JpBanksComponent {...props} />
    </div>
  );
}

export { NetBankingComponent };
