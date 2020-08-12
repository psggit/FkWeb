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
  TellAFriendComponent,
} from "../components";
import { CancelOrderComponent } from "../../common/summary";
import { CancellationSummaryComponent } from "../components";

OrderDetailsComponent.propTypes = {
  getOrderDetailsFunc: PropTypes.func,
  fetchOrderDetailInProgress: PropTypes.bool,
  fetchOrderDetailSuccess: PropTypes.bool,
  fetchOrderDetailFailed: PropTypes.bool,
  order: PropTypes.object,
  orderDetail: PropTypes.object,
};

function OrderDetailsComponent(props) {
  const history = useHistory();

  useLayoutEffect(() => {
    props.getOrderDetailsFunc({
      //orderType: props.order.type,
      orderType: "delivery",
      orderID: props.order.order_id,
    });
  }, []);

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
        title={props.order.detail_display_name}
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
        <OrderSuccessComponent orderPrice="Rs 50000" retailerName="Kloud Bar" />
      );
    }
    return <div />;
  }

  function RenderArrivingComponent() {
    if (props.order == null) {
      return <ArrivingComponent arrivalTime="Arrving Today" otp="864753" />;
    }
    return <div />;
  }

  function RenderTellAFriendComponent() {
    if (props.order == null) {
      return <TellAFriendComponent />;
    }
    return <div />;
  }

  function RenderSummaryComponent() {
    if (props.order != null && props.orderDetail != null) {
      if (props.order.type == "cancelled") {
        return (
          <CancellationSummaryComponent
            orderDetail={props.orderDetail.order_detail}
          />
        );
      } else {
        return (
          <OrderSummaryComponent orderDetail={props.orderDetail.order_detail} />
        );
      }
    } else {
      return <div />;
    }
  }
  return (
    <>
      <RenderToolBar />
      <div className="page-container">
        <RenderOrderSuccess />
        <OrderPlacedHeaderComponent
          purchasedOn={props.order.created_at}
          orderID={"#" + props.order.order_id}
        />
        <RenderArrivingComponent />
        <RenderTellAFriendComponent />
        {props.orderDetail ? (
          <OrderDrinksComponent items={props.orderDetail.items} />
        ) : (
          <div />
        )}
        {props.orderDetail ? (
          <DeliveryAddressComponent
            address={props.orderDetail.address.address}
            addressType={props.orderDetail.address.type}
          />
        ) : (
          <div />
        )}
        <RenderSummaryComponent />
        {props.order.type == "placed" && (
          <CancelOrderComponent
            onClick={() => {
              window.fcWidget.open();
              window.fcWidget.show();
            }}
          />
        )}
      </div>
      <RenderBottomNext />
    </>
  );
}

export { OrderDetailsComponent };
