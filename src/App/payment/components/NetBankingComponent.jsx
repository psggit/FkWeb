import React from "react";
import { downArrowIcon } from "../../../assets/images";
import "../style.scss";
import PropTypes from "prop-types";

NetBankingComponent.propTypes = {
  banks: PropTypes.any,
  onBankSelected: PropTypes.any,
  onOtherBankSelected: PropTypes.any,
};

function NetBankingComponent(props) {
  const { banks, onBankSelected, onOtherBankSelected } = props;
  return (
    <div className="net-banking-container">
      <div className="title">Net Banking</div>
      <div className="bank-list-container">
        {banks.map((bank) => (
          <div
            key={bank.payment_method}
            className="bank"
            id={bank.payment_method}
            value={bank.payment_method}
            onClick={onBankSelected}
          >
            <img src={bank.image_url} className="image" />
            <div className="name">{bank.description}</div>
          </div>
        ))}
      </div>
      <div className="other-banks" onClick={onOtherBankSelected}>
        <div className="other-bank-title">Other Banks</div>
        <img src={downArrowIcon} className="down-image" />
      </div>
    </div>
  );
}

export { NetBankingComponent };
