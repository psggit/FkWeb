import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { ToolbarComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";

import {
  CreditDebitCardsComponent,
  NetBankingComponent,
  OtherBanksComponent,
  UPIComponent,
  UPILowSuccessRate,
} from "./components";

import "./style.scss";

RetryComponent.propTypes = {
  createOrder: PropTypes.func,
  fetchPaymentOptions: PropTypes.func,
  createPayment: PropTypes.func,
  payment: PropTypes.object,
};

function RetryComponent(props) {
  let retryAction;
  if (props.payment.fetchPaymentOptionsFailed) {
    retryAction = props.fetchPaymentOptions;
  } else if (props.payment.createOrderFailed) {
    retryAction = props.createOrder;
  } else if (props.payment.createPaymentFailed) {
    retryAction = props.createPayment;
  }
  return (
    <SplashLoadingComponent
      motion={false}
      icon={drinksIcon}
      text="Something went wrong, please try again."
      buttonFunc={() => retryAction(props)}
      buttonText="Retry"
    />
  );
}

PaymentOptions.propTypes = {
  bank: PropTypes.any,
  payment: PropTypes.object,
  initialise: PropTypes.func,
  summaryDetails: PropTypes.object,
  createPayment: PropTypes.func,
  jpSavedCardsConf: PropTypes.func,
};

function PaymentOptions(props) {
  const [selectedBank, setSelectedBank] = useState("");
  let triggerCreatePayment =
    props.payment.createOrderSuccess &&
    !(
      props.payment.createPaymentInProgress ||
      props.payment.createPaymentFailed ||
      props.payment.createPaymentSuccess
    );

  useEffect(() => {
    if (props.payment.initialTrigger) {
      props.initialise(props);
    }
    console.log(triggerCreatePayment);
    if (triggerCreatePayment) {
      props.createPayment(props);
    }
  });

  const configureJuspay = () => {
    let jp = window.Juspay;
    props.jpSavedCardsConf(jp);
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://api.juspay.in/pay-v3.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload(configureJuspay);
    document.body.appendChild(script);

    /*
    return () => {
      document.body.removeChild(script);
    };
	  */
  }, []);

  if (
    props.payment.createOrderFailed ||
    props.payment.fetchPaymentOptionsFailed ||
    props.payment.createPaymentFailed
  ) {
    return <RetryComponent {...props} />;
  }

  if (
    props.payment.createOrderInProgress ||
    props.payment.fetchPaymentOptionsInProgress ||
    props.payment.createPaymentInProgress
  ) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  }

  const openOtherBankOptions = () => {
    document.getElementById("otherBanksID").classList.remove("hide");
  };

  const payment = props.payment.paymentOptionsDetails;
  const banks = payment.netbanking;

  let title =
    "Pay " + props.summaryDetails.summaryDetails.display_total + " using";

  return (
    <>
      <ToolbarComponent helpVisibility="true" title={title} />
      <div className="page-container payment-option-container">
        {payment.is_upi_enabled && (
          <div>
            {payment.is_upi_low_success_rate && <UPILowSuccessRate />}
            <UPIComponent {...props} />
          </div>
        )}

        {payment.is_cards_enabled && <CreditDebitCardsComponent {...props} />}
        {payment.is_nb_enabled && (
          <div>
            <NetBankingComponent
              banks={banks}
              onBankSelected={openOtherBankOptions}
              onOtherBankSelected={openOtherBankOptions}
            />
            <OtherBanksComponent
              onBankSelected={(bank) => setSelectedBank(bank)}
            />
          </div>
        )}
        <BottomNextComponent routePath={"/payment"} title="Pay" />
      </div>
    </>
  );
}

export { PaymentOptions };
