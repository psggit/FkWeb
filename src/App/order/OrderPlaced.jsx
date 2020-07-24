import React from "react";
import { HeaderComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";

import "./styles.scss";
import {
  DeliveryAddressComponent,
  OrderDrinksComponent,
  OrderPlacedHeaderComponent,
  ArrivingComponent,
  OrderSummaryComponent,
} from "./components";

function OrderPlaced() {
  return (
    <>
      <HeaderComponent title="Order Placed" />
      <div className="page-container order-placed">
        <OrderPlacedHeaderComponent
          orderPrice="Rs 50000"
          retailerName="Kloud Bar"
          purchasedOn="15, Apr 2020 12:20pm"
          orderID="#1233113213"
        />
        <ArrivingComponent arrivalTime="Arrving Today" otp="864753" />
        <OrderDrinksComponent
          brandName="Jhonnie"
          volume="750ml"
          price="Rs 2,000"
          quantity="1"
        />
        <DeliveryAddressComponent
          address="Address, Palavkaam,chennai"
          addressType="Home"
        />
        <OrderSummaryComponent
          orderTotal="Rs. 5214"
          cartTotal="Rs.5000"
          additionalCharges="Rs.100"
          taxAmount="Rs.120"
          gstNumber="15HBPD197123"
        />
      </div>
      <BottomNextComponent routePath="/" title="Home" />
    </>
  );
}

export { OrderPlaced };
