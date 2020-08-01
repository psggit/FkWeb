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
        {props.orderDetail.display_cart_total ? (
          <CartTotalComponent
            cartTotal={props.orderDetail.display_cart_total}
          />
        ) : (
          <div />
        )}
        {props.orderDetail.total_fee ? (
          <AdditionalChargersComponent
            label="Additional Charges"
            charges={props.orderDetail.total_fee}
            chargesList={props.orderDetail.fee_details}
          />
        ) : (
          <div />
        )}
        {props.orderDetail.display_cancellation_fee ? (
          <AdditionalChargersComponent
            label="Cancellation Charges"
            charges={props.orderDetail.display_cancellation_fee}
            chargesList={props.orderDetail.fee_details}
          />
        ) : (
          <div />
        )}
        {props.orderDetail.total_tax ? (
          <AdditionalChargersComponent
            label="Taxes"
            charges={props.orderDetail.total_tax}
            chargesList={props.orderDetail.tax_details}
          />
        ) : (
          <div />
        )}
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
