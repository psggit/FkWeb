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

  function handleBack() {
    if (props.order == null) {
      history.replace("/");
    } else {
      history.goBack();
    }
  }

  function RenderToolBar() {
    return (
      <ToolbarComponent title={order.status_message} onClick={handleBack} />
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
    if (props.order == null) {
      return (
        <ArrivingComponent
          arrivalTime={order.delivery_status}
          otp={order.otp}
        />
      );
    }
    return <div />;
  }

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
        <OrderDrinksComponent items={order.pdt_details} />
        <DeliveryAddressComponent
          address={order.delivery_address}
          addressType={order.address_type}
        />
        <OrderSummaryComponent orderDetail={summayProps} />
      </div>
      <RenderBottomNext />
    </>
  );
}

export { OrderInfoComponent };
