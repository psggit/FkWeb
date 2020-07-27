import React from "react";
import { ToolbarComponent } from "../common/toolbar";
import { BottomNextComponent } from "../common/bottomNext";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import "./styles.scss";
import {
  DeliveryAddressComponent,
  OrderDrinksComponent,
  OrderPlacedHeaderComponent,
  ArrivingComponent,
  OrderSummaryComponent,
  OrderSuccessComponent,
  TellAFriendComponent,
} from "./components";

OrderPlaced.propTypes = {
  isOrderDetail: PropTypes.bool,
  isOrderDelivered: PropTypes.bool,
  isOrderCancelled: PropTypes.bool,
  isOrderPlaced: PropTypes.bool,
};

function OrderPlaced(props) {
  const history = useHistory();
  const {
    isOrderDetail,
    isOrderDelivered,
    isOrderCancelled,
    isOrderPlaced,
  } = props;

  function handleBack() {
    if (isOrderPlaced) {
      history.replace("/");
    } else {
      history.goBack();
    }
  }

  function RenderToolBar() {
    if (isOrderPlaced) {
      return <ToolbarComponent title="Order Placed" onClick={handleBack} />;
    } else if (isOrderDelivered) {
      return <ToolbarComponent title="Order Delivered" onClick={handleBack} />;
    } else if (isOrderCancelled) {
      return <ToolbarComponent title="Order Cancelled" onClick={handleBack} />;
    } else if (isOrderDetail) {
      return <ToolbarComponent title="Order Info" onClick={handleBack} />;
    }
  }

  function RenderBottomNext() {
    if (isOrderPlaced == true) {
      return <BottomNextComponent routePath="/" title="Home" />;
    }
    return <div />;
  }

  function RenderOrderSuccess() {
    if (isOrderPlaced == true) {
      return (
        <OrderSuccessComponent orderPrice="Rs 50000" retailerName="Kloud Bar" />
      );
    }
    return <div />;
  }

  function RenderArrivingComponent() {
    if (isOrderPlaced == true || isOrderDetail == true) {
      return <ArrivingComponent arrivalTime="Arrving Today" otp="864753" />;
    }
    return <div />;
  }

  function RenderTellAFriendComponent() {
    if (isOrderPlaced == true || isOrderDetail == true) {
      return <TellAFriendComponent />;
    }
    return <div />;
  }

  return (
    <>
      <RenderToolBar />
      <div className="page-container order-placed">
        <RenderOrderSuccess />
        <OrderPlacedHeaderComponent
          purchasedOn="15, Apr 2020 12:20pm"
          orderID="#1233113213"
        />
        <RenderArrivingComponent />
        <RenderTellAFriendComponent />
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
      <RenderBottomNext />
    </>
  );
}

export { OrderPlaced };
