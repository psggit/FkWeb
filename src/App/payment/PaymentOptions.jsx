import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ToolbarComponent } from "../common/toolbar";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";
import config from "../../config";

import {
  CreditDebitCardsComponent,
  NetBankingComponent,
  UPIComponent,
  WalletComponent,
  UPIVerifyComponent,
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
  createCollectRequest: PropTypes.func,
};

function PaymentOptions(props) {
  const [jpLoaded, SetjpLoaded] = useState(false);

  let triggerCreatePayment =
    props.payment.createOrderSuccess &&
    !(
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
    return props.resetPaymentOnUnmount;
  }, []);

  useEffect(() => {
    console.log(props);
    if (
      props.payment.createOrderSuccess &&
      props.payment.createUPIPaymentSuccess
    ) {
      props.createCollectRequest(props.payment.upiDetails.txn_id);
    }
  }, [props.payment.createUPIPaymentSuccess]);

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

  console.log("Payment Option", " : reload");

  const openOtherBankOptions = () => {
    document.getElementById("otherBanksID").classList.remove("hide");
  };

  const payment = props.payment.paymentOptionsDetails;
  const banks = payment.netbanking;

  let title = "Pay ₹ " + props.payment.paymentDetails.amount + " using";

  const addCardAndProcess = () => {
    console.log("props:addCardAndProcess", props);
    return <AddCardAndProcessPayment {...props} />;
  };

  const upiVerifyProcess = () => {
    console.log("props:upiVerifyProcess", props);
    return <UPIVerifyComponent {...props} />;
  };

  const paymentOptions = () => {
    console.log("props:paymentOptions", props);
    return (
      <>
        {props.payment.createOrderSuccess &&
        props.payment.createUPIPaymentSuccess &&
        props.payment.createCollectRequestSuccess ? (
          <Redirect
            to={
              "/payment/options/upi/verify/" +
              props.payment.paymentOptionsDetails.upi_time_limit +
              "/" +
              props.payment.upiDetails.txn_id +
              "/" +
              props.payment.orderDetails.order_id
            }
            push={true}
          />
        ) : null}
        <ToolbarComponent helpVisibility={false} title={title} />
        <div className="page-container">
          {payment.is_upi_enabled && (
            <div>
              <UPIComponent {...props} jpLoaded={jpLoaded} />
            </div>
          )}

          {payment.is_cards_enabled && (
            <CreditDebitCardsComponent {...props} jpLoaded={jpLoaded} />
          )}
          <WalletComponent {...props} jpLoaded={jpLoaded} />

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
      </>
    );
  };

  if (
    props.payment.createOrderSuccess &&
    props.payment.fetchPaymentOptionsSuccess &&
    props.payment.createPaymentSuccess
  ) {
    return (
      <>
        <div>
          <Router>
            <Switch>
              <Route
                path="/payment/options/card/new"
                render={() => addCardAndProcess()}
              />
              <Route
                path="/payment/options/upi/verify/:time_limit/:txn_id/:order_id"
                render={() => upiVerifyProcess()}
              />
              <Route path="/payment/options" render={() => paymentOptions()} />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
  return (
    <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
  );
}

export { PaymentOptions };
