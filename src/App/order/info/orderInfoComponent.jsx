import React, { useLayoutEffect } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import { BottomNextComponent } from "../../common/bottomNext";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles.scss";
import {
  DeliveryAddressComponent,
  OrderDrinksComponent,
  OrderPlacedHeaderComponent,
  ArrivingComponent,
  OrderSummaryComponent,
  OrderSuccessComponent,
} from "../components";

import { CancelOrderComponent } from "../../common/summary";

const getSummaryProps = (orderDetails) => {
  return {
    ...orderDetails,
    display_total_paid: orderDetails.display_order_total,
  };
};

OrderInfoComponent.propTypes = {
  order: PropTypes.object,
};

function OrderInfoComponent(props) {
  const history = useHistory();
  let order = props.order.order_details;
  let productDetails = order.pdt_details.map((item) => {
    return { ...item, reserved_price: item.display_price };
  });

  function handleBack() {
    if (props.order == null) {
      history.replace("/");
    } else {
      history.goBack();
    }
  }

  function RenderToolBar() {
    return (
      <ToolbarComponent
        title={props.order.status_message}
        onClick={handleBack}
      />
    );
  }

  function RenderBottomNext() {
    if (props.order == null) {
      return <BottomNextComponent routePath="/" title="Home" />;
    }
    return <div />;
  }

  function RenderOrderSuccess() {
    if (props.order == null) {
      return (
        <OrderSuccessComponent
          orderPrice={order.display_order_total}
          retailerName={order.retailer_name}
        />
      );
    }
    return <div />;
  }

  function RenderArrivingComponent() {
    return (
      <ArrivingComponent arrivalTime={order.delivery_status} otp={order.otp} />
    );
  }

  console.log("Order Placed:");

  const summayProps = getSummaryProps(order);
  return (
    <>
      <RenderToolBar />
      <div className="page-container">
        <RenderOrderSuccess />
        <OrderPlacedHeaderComponent
          purchasedOn={order.transacted_on}
          orderID={"#" + order.order_id}
        />
        <RenderArrivingComponent />
        <OrderDrinksComponent items={productDetails} />
        <DeliveryAddressComponent
          address={order.delivery_address}
          addressType={order.address_type}
        />
        <OrderSummaryComponent orderDetail={summayProps} />
        <CancelOrderComponent
          onClick={() => {
            window.fcWidget.open();
            window.fcWidget.show();
          }}
        />
      </div>
      <RenderBottomNext />
    </>
  );
}

export { OrderInfoComponent };
