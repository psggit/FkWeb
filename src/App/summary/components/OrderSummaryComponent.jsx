import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import {
  OrderTotalComponent,
  CartTotalComponent,
  AdditionalChargersComponent,
} from "../../common/summary";
import { YouPayComponent } from "../components";

OrderSummaryComponent.propTypes = {
  summary: PropTypes.object,
};

function OrderSummaryComponent(props) {
  let summary = props.summary;
  return (
    <div className="generic-detail-container">
      <div className="order-sub-header">SUMMARY</div>
      <OrderTotalComponent marginTop={true} total={summary.display_total} />
      <CartTotalComponent cartTotal={summary.display_cart_total} />
      {summary.total_fee && (
        <AdditionalChargersComponent
          key="additional-charges"
          label="Additional Charges"
          charges={summary.total_fee}
          chargesList={summary.fee_details}
        />
      )}
      {summary.total_tax && (
        <AdditionalChargersComponent
          key="taxes"
          label="Taxes"
          charges={summary.total_tax}
          chargesList={summary.tax_details}
        />
      )}
      <YouPayComponent toPay={summary.display_balance} />
    </div>
  );
}

export default OrderSummaryComponent;
