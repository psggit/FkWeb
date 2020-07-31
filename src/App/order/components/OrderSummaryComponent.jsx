import React from "react";
import PropTypes from "prop-types";
import {
  OrderTotalComponent,
  CartTotalComponent,
  GstNumberComponent,
  AdditionalChargersComponent,
} from "../../common/summary";

OrderSummaryComponent.propTypes = {
  orderDetail: PropTypes.object,
};

function OrderSummaryComponent(props) {
  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">ORDER SUMMARY</div>
        <OrderTotalComponent total={props.orderDetail.display_total_paid} />
        <CartTotalComponent cartTotal={props.orderDetail.display_cart_total} />
        <AdditionalChargersComponent
          label="Additional Charges"
          charges={props.orderDetail.total_fee}
          chargesList={props.orderDetail.fee_details}
        />
        <AdditionalChargersComponent
          label="Taxes"
          charges={props.orderDetail.total_tax}
          chargesList={props.orderDetail.tax_details}
        />
        {props.orderDetail.gst_number != "" ? (
          <GstNumberComponent gstNumber={props.orderDetail.gst_number} />
        ) : (
          <div />
        )}
      </div>
    </>
  );
}

export { OrderSummaryComponent };
