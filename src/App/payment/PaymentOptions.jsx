import React, { useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";

import { ToolbarComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";

import {
  CreditDebitCardsComponent,
  NetBankingComponent,
  OtherBanksComponent,
} from "./components";

import "./style.scss";

RetryComponent.propTypes = {
  createOrder: PropTypes.func,
  fetchPaymentOptions: PropTypes.func,
  payment: PropTypes.object,
};

function RetryComponent(props) {
  let retryAction;
  if (props.payment.fetchPaymentOptionsFailed) {
    retryAction = props.fetchPaymentOptions;
  } else if (props.payment.createOrderFailed) {
    retryAction = props.createOrder;
  }
  return (
    <>
      <SplashLoadingComponent
        motion={false}
        icon={drinksIcon}
        text="Something went wrong, please try again."
        buttonFunc={() => retryAction(props)}
        buttonText="Retry"
      />
    </>
  );
}

PaymentOptions.propTypes = {
  bank: PropTypes.any,
  payment: PropTypes.object,
  initialise: PropTypes.func,
};

function PaymentOptions(props) {
  const [selectedBank, setSelectedBank] = useState("");

  useLayoutEffect(() => {
    if (props.payment.initialTrigger) {
      props.initialise(props);
    }
  });

  if (
    props.payment.createOrderFailed ||
    props.payment.fetchPaymentOptionsFailed
  ) {
    return <RetryComponent {...props} />;
  }

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
