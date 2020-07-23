import React, { useState } from "react";
import { ToolbarComponent } from "../common/toolbar";
import {
  CreditDebitCardsComponent,
  NetBankingComponent,
  OtherBanksComponent,
} from "./components";
import { BottomNextComponent } from "../common/bottomNext";
import PropTypes from "prop-types";

import "./style.scss";

PaymentOptions.propTypes = {
  bank: PropTypes.any,
};

function PaymentOptions() {
  const [selectedBank, setSelectedBank] = useState("");

  const openOtherBankOptions = () => {
    document.getElementById("otherBanksID").classList.remove("hide");
  };

  const banks = [
    {
      payment_method_type: "NB",
      payment_method: "NB_HDFC",
      description: "HDFC Bank",
      image_url:
        "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_88,q_80/v1535119548/Bank%20Logos%20_56px%20/HDFC.png",
      listing_order: 1,
    },
  ];

  return (
    <>
      <ToolbarComponent helpVisibility="true" title="Pay Rs 32.00 using" />
      <div className="page-container payment-option-container">
        <CreditDebitCardsComponent />
        <NetBankingComponent
          banks={banks}
          onBankSelected={openOtherBankOptions}
          onOtherBankSelected={openOtherBankOptions}
        />
        <OtherBanksComponent onBankSelected={(bank) => setSelectedBank(bank)} />
        <BottomNextComponent
          routePath={"/order/placed/" + selectedBank}
          title="Pay"
        />
      </div>
    </>
  );
}

export { PaymentOptions };
