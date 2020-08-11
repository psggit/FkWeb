import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Alert } from "../common/alert";
import { ToolbarComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import { OrderAddressComponent, YouPayComponent } from "./components";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";
import {
  OrderTotalComponent,
  AdditionalChargersComponent,
  CartTotalComponent,
} from "../common/summary";

import "./style.scss";
import { infoIcon } from "../../assets/images";

RetryComponent.propTypes = {
  fetchSummary: PropTypes.func,
};

function RetryComponent(props) {
  const fetchSummary = props.fetchSummary;
  return (
    <>
      <SplashLoadingComponent
        motion={false}
        icon={drinksIcon}
        text="Something went wrong, please try again."
        buttonFunc={() => fetchSummary(props)}
        buttonText="Retry"
      />
    </>
  );
}

function PartialDelivery() {
  return (
    <div className="partial-delivery-container">
      <div className="accept-delivery-container">
        <input
          type="checkbox"
          id="partialDelivery"
          name="partialDelivery"
          key="partialDelivery"
        />
        <div className="title">Accept Partial Delivery</div>
      </div>
      <img src={infoIcon} className="info-icon" />
    </div>
  );
}

SummaryComponent.propTypes = {
  summary: PropTypes.object,
};
function SummaryComponent(props) {
  let summary = props.summary.summaryDetails;
  return (
    <div>
      <ToolbarComponent helpVisibility={false} title="Order Summary" />
      <div className="page-container">
        <OrderAddressComponent {...props} />
        <OrderTotalComponent marginTop={true} total={summary.display_total} />
        <CartTotalComponent cartTotal={summary.display_cart_total} />
        <AdditionalChargersComponent
          key="additional-charges"
          label="Additional Charges"
          charges={summary.total_fee}
          chargesList={summary.fee_details}
        />
        <AdditionalChargersComponent
          key="taxes"
          label="Taxes"
          charges={summary.total_tax}
          chargesList={summary.tax_details}
        />
        <YouPayComponent toPay={summary.display_balance} />

        <div className="summary-delivery-msg">{summary.delivery_message}</div>
      </div>
      <BottomNextComponent routePath="/payment/options" title="Pay Now" />
    </div>
  );
}

SummaryFailedComponent.propTypes = {
  summary: PropTypes.object,
};

function SummaryFailedComponent(props) {
  let fetchSummaryError = props.summary.fetchSummaryError;
  let fetchSummaryLocationError = props.summary.fetchSummaryLocationError;
  let message = props.summary.fetchSummaryErrorMessage;
  const history = useHistory();
  let handleAction;
  if (fetchSummaryError) {
    handleAction = () => {
      history.push("/cart");
    };
  } else if (fetchSummaryLocationError) {
    handleAction = () => {
      history.goBack();
    };
  }

  return (
    <Alert
      handleOption={handleAction}
      show={true}
      title={message}
      option={"Ok"}
    />
  );
}

OrderSummary.propTypes = {
  summary: PropTypes.object,
  resetOnUnmount: PropTypes.func,
};

function OrderSummary(props) {
  let fetchSummarySuccess = props.summary.fetchSummarySuccess;
  let fetchSummaryInProgress = props.summary.fetchSummaryInProgress;
  let fetchSummaryFailed = props.summary.fetchSummaryFailed;
  let fetchSummaryError = props.summary.fetchSummaryError;
  let fetchSummaryLocationError = props.summary.fetchSummaryLocationError;
  const trigger = !(
    fetchSummarySuccess ||
    fetchSummaryFailed ||
    fetchSummaryInProgress
  );
  useEffect(() => {
    if (trigger) {
      props.fetchSummary(props);
    }
  });

  useEffect(() => {
    return props.resetOnUnmount;
  }, []);

  if (fetchSummaryInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  } else if (fetchSummaryFailed) {
    return <RetryComponent {...props} />;
  } else if (fetchSummaryError || fetchSummaryLocationError) {
    return <SummaryFailedComponent {...props} />;
  } else if (fetchSummarySuccess) {
    return <SummaryComponent {...props} />;
  } else {
    return <div />;
  }
}
export { OrderSummary, PartialDelivery };
