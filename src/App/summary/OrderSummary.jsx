import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import {
  OrderAddressComponent,
  OrderTotalComponent,
  AdditionalChargersComponent,
  YouPayComponent,
  GstNumberComponent,
  CartTotalComponent,
} from "./components";
import "./style.scss";
import infoIcon from "../../assets/images/info.svg";

function OrderSummary() {
  return (
    <div>
      <ToolbarComponent helpVisibility="true" title="Order Summary" />
      <div className="page-container summary-wrapper">
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
