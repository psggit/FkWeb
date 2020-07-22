import React from "react";
import PropTypes from "prop-types";
import {
  OrderTotalComponent,
  CartTotalComponent,
  GstNumberComponent,
  AdditionalChargersComponent,
} from "../../common/summary";

OrderSummaryComponent.propTypes = {
  orderTotal: PropTypes.string,
  cartTotal: PropTypes.string,
  additionalCharges: PropTypes.string,
  taxAmount: PropTypes.string,
  gstNumber: PropTypes.string,
};

function OrderSummaryComponent(props) {
  const {
    orderTotal,
    cartTotal,
    additionalCharges,
    taxAmount,
    gstNumber,
  } = props;

  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">ORDER SUMMARY</div>
        <OrderTotalComponent total={orderTotal} />
        <CartTotalComponent cartTotal={cartTotal} />
        <AdditionalChargersComponent
          label="Additional Charges"
          charges={additionalCharges}
        />
        <AdditionalChargersComponent label="Taxes" charges={taxAmount} />
        <GstNumberComponent gstNumber={gstNumber} />
      </div>
    </>
  );
}

export { OrderSummaryComponent };
