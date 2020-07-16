import React from "react";
import ToolbarComponent from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import OrderAddressComponent from "./components/orderAddress";
import "./style.scss";
import downIcon from "../../assets/images/right_arrow.svg";
import infoIcon from "../../assets/images/info.svg";

function OrderSummary() {
  return (
    <div>
      <ToolbarComponent helpVisibility="true" title="Order Summary" />
      <div className="page-container">
        <OrderAddressComponent />
        <div className="order-container">
          <div>Order Total</div>
          <div> Rs 5,250.00</div>
        </div>
        <div className="charges-container">
          <div>Cart Total</div>
          <div> Rs 5,150.00</div>
        </div>
        <div className="charges-container">
          <div className="label-container">
            <div>Additional Charges</div>
            <img src={downIcon} className="icon" />
          </div>
          <div> Rs 150.00</div>
        </div>
        <div className="charges-container">
          <div className="label-container">
            <div>Taxes</div>
            <img src={downIcon} className="icon" />
          </div>
          <div> Rs 5,2.00</div>
        </div>
        <div className="you-pay-container">
          <div>You Pay</div>
          <div> Rs 5,214</div>
        </div>
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
      </div>
      <BottomNextComponent routePath="/payment/options" title="Pay Now" />
    </div>
  );
}

export default OrderSummary;
