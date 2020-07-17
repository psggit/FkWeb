import React from "react";
import ToolbarComponent from "../common/toolbar";
import infoIcon from "../../assets/images/info.svg";
import "./style.scss";

function UPIComponent() {
  return (
    <div className="upi-component">
      <img src={infoIcon} className="upi-image" />
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
    <div className="card-container">
      <div className="card-details">
        <div className="card-number">XXXX-XXXX-XXXX-1234</div>
        <div className="card-expiry">01/23</div>
      </div>
      <div className="card-cvv-container">
        <img src={infoIcon} className="card-cvv-image" />
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
      <img src={infoIcon} className="new-card-image" />
      <div className="low-success-rate">
        UPI low success rate detected.Please try with alternate payment method
      </div>
    </div>
  );
}

function AddNewCardComponent() {
  return (
    <div className="add-new-container">
      <div className="low-success-rate">
        UPI low success rate detected.Please try with alternate payment method
      </div>
    </div>
  );
}

function NetBankingComponent() {
  return <div></div>;
}

function Payment() {
  return (
    <div className="low-success-rate-container">
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
