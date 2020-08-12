import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { ToolbarComponent } from "../common/toolbar";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";

import {
  CreditDebitCardsComponent,
  NetBankingComponent,
  UPIComponent,
} from "./components";
import { AddCardAndProcessPayment } from "./components";

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
  createPayment: PropTypes.func,
  jpSavedCardsConf: PropTypes.func,
  resetPaymentOnUnmount: PropTypes.func,
};

function PaymentOptions(props) {
  let triggerCreatePayment =
    props.payment.createOrderSuccess &&
    !(
      props.payment.createPaymentInProgress ||
      props.payment.createPaymentFailed ||
      props.payment.createPaymentSuccess
    );

  useEffect(() => {
    return props.resetPaymentOnUnmount;
  }, []);

  useEffect(() => {
    if (props.payment.initialTrigger) {
      props.initialise(props);
    }
    if (triggerCreatePayment) {
      props.createPayment(props);
    }
  });

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

  let title = "Pay ₹ " + props.payment.paymentDetails.amount + " using";

  if (props.payment.addNewCard) {
    return <AddCardAndProcessPayment {...props} />;
  }

  return (
    <>
      <ToolbarComponent helpVisibility={false} title={title} />
      <div className="page-container">
        {payment.is_upi_enabled && (
          <div>
            <UPIComponent {...props} />
          </div>
        )}

        {payment.is_cards_enabled && <CreditDebitCardsComponent {...props} />}
        {payment.is_nb_enabled && (
          <div>
            <NetBankingComponent
              {...props}
              banks={banks}
              onBankSelected={openOtherBankOptions}
              onOtherBankSelected={openOtherBankOptions}
            />
          </div>
        )}
      </div>
    </>
  );
}

export { PaymentOptions };
