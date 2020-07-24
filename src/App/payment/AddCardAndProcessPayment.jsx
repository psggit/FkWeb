import React from "react";
import { BottomNextComponent } from "../common/bottomNext";
import { ToolbarComponent } from "../common/toolbar";
import { EditText } from "../common/editText";

function AddCardAndProcessPayment() {
  return (
    <>
      <ToolbarComponent helpVisibility="false" title="Payment" />
      <div className="page-container">
        <EditText
          title="CARD NUMBER"
          id="cardNumber"
          inputMode="numeric"
          autoComplete="section-cc cc-number"
          maxLength="20"
        />
        <EditText
          title="EXPIRY DATE (MM/YY)"
          id="expiryDate"
          inputType="month"
          autoComplete="section-cc cc-exp"
        />
        <EditText
          title="CVV"
          id="cvvNumber"
          inputType="password"
          inputMode="numeric"
          autoComplete="section-cc cc-csc"
          maxLength="4"
        />
        <EditText
          title="NAME ON CARD"
          id="nameOfCard"
          inputType="text"
          autoComplete="section-cc cc-name"
          maxLength="30"
        />
      </div>
      <BottomNextComponent routePath={"/order/placed"} title="Pay" />
    </>
  );
}

export { AddCardAndProcessPayment };
