import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../../common/toolbar";
import config from "../../../config";
import {
  CreditDebitCardsComponent,
  NetBankingComponent,
  UPIComponent,
  WalletComponent,
  AddCardAndProcessPayment,
} from "../../payment/components";
import { SplashLoadingComponent } from "../../common/splashLoading";
import { drinksIcon } from "../../../assets/images";

function RetryComponent(props) {
  let retryAction;
  if (props.payment.createPaymentFailed) {
    retryAction = props.createPaymentOperation;
  }
  return (
    <SplashLoadingComponent
      motion={false}
      icon={drinksIcon}
      text="Something went wrong, please try again."
      buttonFunc={() => retryAction(props)}
      buttonText="Retry"
      dontGoHome={true}
    />
  );
}

function ExternalPaymentsComponent(props) {
  localStorage.setItem("mode", "web");
  const redirect = props.redirect;
  localStorage.setItem("redirect", redirect.orderId);
  const [jpLoaded, SetjpLoaded] = useState(false);
  let triggerCreatePayment = !(
    props.payment.createPaymentInProgress ||
    props.payment.createPaymentFailed ||
    props.payment.createPaymentSuccess
  );

  useEffect(() => {
    const script = document.createElement("script");

    script.src = config.JusPayScript;
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => SetjpLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (props.webPayment.fetchOrderSummarySuccess) {
      props.initialise(props.webPayment.summaryDetails);
      if (triggerCreatePayment) {
        props.createPaymentOperation(props.webPayment.summaryDetails);
      }
    }
  }, [props.webPayment.fetchOrderSummarySuccess]);

  useEffect(() => {
    if (props.payment.createUPIPaymentSuccess) {
      props.createCollectRequest(props.payment.upiDetails.txn_id);
    }
  }, [props.payment.createUPIPaymentSuccess]);

  useEffect(() => {
    props.fetchSummary(redirect.orderId);
  }, []);

  let title = "";
  if (props.webPayment.fetchOrderSummarySuccess) {
    title = "Pay ₹ " + props.webPayment.summaryDetails.amount + " using";
  }
  const payment = props.payment.paymentOptionsDetails;
  const banks = payment.netbanking;

  if (
    props.payment.fetchPaymentOptionsInProgress ||
    props.payment.createPaymentInProgress
  ) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  }

  const addCardAndProcess = () => {
    return <AddCardAndProcessPayment {...props} />;
  };

  const openOtherBankOptions = () => {
    document.getElementById("otherBanksID").classList.remove("hide");
  };

  const paymentOptions = () => {
    return (
      <div className="payment-list-container">
        <ToolbarComponent
          backVisibility={false}
          helpVisibility={false}
          title={title}
        />
        <div className="page-container">
          {payment.is_upi_enabled && (
            <div>
              <UPIComponent {...props} jpLoaded={jpLoaded} />
            </div>
          )}

          {payment.is_cards_enabled && (
            <CreditDebitCardsComponent
              {...props}
              linkto={`/order/payment/${redirect.orderId}/new`}
              jpLoaded={jpLoaded}
            />
          )}
          {payment.is_jp_wallets_enabled && (
            <WalletComponent {...props} jpLoaded={jpLoaded} />
          )}
          {payment.is_nb_enabled && (
            <div>
              <NetBankingComponent
                {...props}
                banks={banks}
                jpLoaded={jpLoaded}
                onBankSelected={openOtherBankOptions}
                onOtherBankSelected={openOtherBankOptions}
              />
            </div>
          )}
        </div>
      </div>
    );
  };
  if (props.payment.createPaymentFailed) {
    return <RetryComponent {...props} />;
  }
  if (
    props.payment.fetchPaymentOptionsSuccess &&
    props.payment.createPaymentSuccess
  ) {
    return props.history.location.pathname ==
      `/order/payment/${redirect.orderId}/new`
      ? addCardAndProcess()
      : paymentOptions();
  }
  return (
    <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
  );
}

ExternalPaymentsComponent.propTypes = {
  payment: PropTypes.any,
  webPayment: PropTypes.any,
  fetchSummary: PropTypes.func,
  initialise: PropTypes.func,
  createPaymentOperation: PropTypes.func,
  createCollectRequest: PropTypes.func,
  redirect: PropTypes.object,
  history: PropTypes.object,
};

export { ExternalPaymentsComponent };
