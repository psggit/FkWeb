import React from "react";
import PropTypes from "prop-types";
import { CartTotalComponent } from "../../common/summary";

CancellationSummaryComponent.propTypes = {
  orderDetail: PropTypes.object,
};

function CancellationSummaryComponent(props) {
  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">CANCELLATION SUMMARY</div>
        {props.orderDetail.display_total_paid ? (
          <CartTotalComponent
            label="Total Paid"
            cartTotal={props.orderDetail.display_total_paid}
          />
        ) : (
          <div />
        )}
        {props.orderDetail.display_total_paid ? (
          <CartTotalComponent
            label="Cancellation Charges"
            cartTotal={props.orderDetail.display_total_paid}
          />
        ) : (
          <div />
        )}
        <div className="line" />
        {props.orderDetail.display_total_paid ? (
          <CartTotalComponent
            label="Amount Repaid"
            cartTotal={props.orderDetail.display_total_paid}
          />
        ) : (
          <div />
        )}
        <div className="charge-container">
          Refundable amt. will be processed to your source account
        </div>
      </div>
    </>
  );
}

export { CancellationSummaryComponent };
