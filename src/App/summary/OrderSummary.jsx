import React from "react";
import ToolbarComponent from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import OrderAddressComponent from "./components/orderAddress";
import "./style.scss";
import downIcon from "../../assets/images/right_arrow.svg";
import infoIcon from "../../assets/images/info.svg";
import PropTypes from "prop-types";

OrderTotalComponent.propTypes = {
  total: PropTypes.any,
};

function OrderTotalComponent(props) {
  const total = props.total;
  return (
    <div className="order-container">
      <div>Order Total</div>
      <div>{total}</div>
    </div>
  );
}

CartTotalComponent.propTypes = {
  cartTotal: PropTypes.any,
};

function CartTotalComponent(props) {
  const cartTotal = props.cartTotal;
  return (
    <div className="charges-container">
      <div>Cart Total</div>
      <div>{cartTotal}</div>
    </div>
  );
}

GstNumberComponent.propTypes = {
  gstNumber: PropTypes.any,
};

function GstNumberComponent(props) {
  const gstNumber = props.gstNumber;
  return (
    <div className="gst-number-container">
      <div>GST Number</div>
      <div>{gstNumber}</div>
    </div>
  );
}

YouPayComponent.propTypes = {
  toPay: PropTypes.any,
};

function YouPayComponent(props) {
  const toPay = props.toPay;
  return (
    <div className="you-pay-container">
      <div>You Pay</div>
      <div>{toPay}</div>
    </div>
  );
}

AdditionalChargersComponent.propTypes = {
  label: PropTypes.any,
  charges: PropTypes.any,
};

function AdditionalChargersComponent(props) {
  const label = props.label;
  const charges = props.charges;
  return (
    <div className="charges-container">
      <div className="label-container">
        <div>{label}</div>
        <img src={downIcon} className="icon" />
      </div>
      <div>{charges}</div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div>
      <ToolbarComponent helpVisibility="true" title="Order Summary" />
      <div className="page-container">
        <OrderAddressComponent />
        <OrderTotalComponent total="Rs. 5,214.50" />
        <CartTotalComponent cartTotal="Rs. 5,214.50" />
        <AdditionalChargersComponent
          label="Additional Charges"
          charges="Rs. 5,214.50"
        />
        <AdditionalChargersComponent label="Taxes" charges="Rs. 5,214.50" />

        <GstNumberComponent gstNumber="15HBPD1973D6A7" />
        <YouPayComponent toPay="Rs.120" />
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
        <div className="summary-delivery-msg">
          Delivery will be made between 12-4 pm tomorrow
        </div>
      </div>
      <BottomNextComponent routePath="/payment/options" title="Pay Now" />
    </div>
  );
}

export default OrderSummary;
