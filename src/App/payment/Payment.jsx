import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import upiIcon from "../../assets/images/upi.svg";
import nextIcon from "../../assets/images/right_arrow.svg";
import cardIcon from "../../assets/images/new_cards.svg";
import lockIcon from "../../assets/images/lock.svg";
import addNewIcon from "../../assets/images/add_address.svg";
import netBankingIcon from "../../assets/images/add_address.svg";
import downIcon from "../../assets/images/add_address.svg";
import "./style.scss";

function UPIComponent() {
  return (
    <div className="upi-component">
      <img src={upiIcon} className="upi-image" />
      <div className="upi-details">
        <UPILowSuccessRate />
        <div className="upi-field-container">
          <input
            type="radio"
            name="upiradio"
            id="upiradioinput"
            className="upi-radio"
          />
          <input
            type="text"
            placeholder="Enter your UPI ID"
            className="upi-id"
          />
        </div>
      </div>
    </div>
  );
}

function UPILowSuccessRate() {
  return (
    <div className="low-success-rate">
      UPI low success rate detected.Please try with alternate payment method
    </div>
  );
}

function CreditDebitCardsComponent() {
  return (
    <div className="card-container">
      <div className="card-title">Credit/Debit Cards</div>
      <NewCardComponent />
      <SavedCardComponent />
      <AddNewCardComponent />
    </div>
  );
}

function SavedCardComponent() {
  return (
    <div className="saved-card-container">
      <div className="card-details">
        <div className="card-number">
          <div className="card-mask">XXXX-XXXX-XXXX-</div>
          <div className="card-last-digits">1234</div>
        </div>
        <div className="card-expiry">01/23</div>
      </div>
      <div className="card-cvv-container">
        <img src={lockIcon} className="card-cvv-image" />
        <input
          type="text"
          id="cvvNumber"
          placeholder="CVV Number"
          className="card-cvv"
        />
      </div>
    </div>
  );
}

function NewCardComponent() {
  return (
    <div className="new-card-container">
      <img src={cardIcon} className="new-card-image" />
      <div className="new-card-msg">Add card & proceed to payment</div>
      <img src={nextIcon} className="next-image" />
    </div>
  );
}

function AddNewCardComponent() {
  return (
    <div className="add-new-container">
      <div className="label">Add New Card</div>
      <img className="image" src={addNewIcon} />
    </div>
  );
}

function NetBankingComponent() {
  return (
    <div className="net-banking-ontainer">
      <div className="title">Net Banking</div>
      <div className="bank-list-container">
        <div className="bank">
          <img src={netBankingIcon} className="image" />
          <div className="name">HDFC</div>
        </div>
      </div>
      <div className="other-banks">
        <div className="title">Other Banks</div>
        <img src={downIcon} className="down-image" />
      </div>
    </div>
  );
}

function Payment() {
  return (
    <div>
      <ToolbarComponent helpVisibility="true" title="Pay Rs 32.00 using" />
      <div className="page-container">
        <UPIComponent />
        <CreditDebitCardsComponent />
        <NetBankingComponent />
      </div>
    </div>
  );
}

export default Payment;
