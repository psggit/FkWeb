import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";

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
      <ToolbarComponent helpVisibility="true" title="Order Summary" />
      <div className="page-container summary-wrapper">
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

OrderSummary.propTypes = {
  summary: PropTypes.object,
};

function OrderSummary(props) {
  let fetchSummarySuccess = props.summary.fetchSummarySuccess;
  let fetchSummaryInProgress = props.summary.fetchSummaryInProgress;
  let fetchSummaryFailed = props.summary.fetchSummaryFailed;
  const trigger = !(
    fetchSummarySuccess ||
    fetchSummaryFailed ||
    fetchSummaryInProgress
  );
  useLayoutEffect(() => {
    if (trigger) {
      props.fetchSummary(props);
    }
  });

  if (fetchSummaryInProgress) {
    return (
      <SplashLoadingComponent motion={true} icon={drinksIcon} text="Loading" />
    );
  } else if (fetchSummaryFailed) {
    return <RetryComponent {...props} />;
  } else if (fetchSummarySuccess) {
    return <SummaryComponent {...props} />;
  } else {
    return <div />;
  }
}
export { OrderSummary, PartialDelivery };
