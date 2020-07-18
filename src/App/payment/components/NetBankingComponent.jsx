import React from "react";
import netBankingIcon from "../../../assets/images/add_address.svg";
import downIcon from "../../../assets/images/down.svg";
import "../style.scss";

function NetBankingComponent() {
  return (
    <div className="net-banking-container">
      <div className="title">Net Banking</div>
      <div className="bank-list-container">
        <div className="bank">
          <img src={netBankingIcon} className="image" />
          <div className="name">HDFC</div>
        </div>
        <div className="bank">
          <img src={netBankingIcon} className="image" />
          <div className="name">HDFC</div>
        </div>
        <div className="bank">
          <img src={netBankingIcon} className="image" />
          <div className="name">HDFC</div>
        </div>
      </div>
      <div className="other-banks">
        <div className="other-bank-title">Other Banks</div>
        <img src={downIcon} className="down-image" />
      </div>
    </div>
  );
}

export { NetBankingComponent };
