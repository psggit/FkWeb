import React, { useEffect } from "react";
import "../style.scss";
import PropTypes from "prop-types";

let juspay_form;
let nbDisplayCount = 8;

JpBanksComponent.propTypes = {
  jpNetBankingConf: PropTypes.func,
  payment: PropTypes.object,
  jpLoaded: PropTypes.bool,
  banks: PropTypes.any,
};

function JpBanksComponent(props) {
  const paymentDetails = props.payment.paymentDetails;
  const jpLoaded = props.jpLoaded;
  const { banks } = props;

  const configureJuspay = () => {
    let jp = window.Juspay;
    juspay_form = props.jpNetBankingConf(jp, 100004);
  };

  useEffect(() => {
    if (jpLoaded) {
      configureJuspay();
    }
  }, [jpLoaded]);

  const onSubmit = () => {
    juspay_form.submit_form();
  };

  const getBanks = () => {
    var topBanks = [];
    if (banks.length > nbDisplayCount) {
      topBanks = banks.slice(nbDisplayCount, banks.length);
    }
    return topBanks;
  };

  return (
    <>
      <div className="list-wrapper nb-margin">
        <form className="juspay_inline_form " id={"nb_payment_form" + 100004}>
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
              {getBanks().map((bank) => (
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
    </>
  );
}

export { JpBanksComponent };
