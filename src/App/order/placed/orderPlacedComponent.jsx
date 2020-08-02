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

OrderPlacedComponent.propTypes = {
  fetchOrderDetailInProgress: PropTypes.bool,
  fetchOrderDetailSuccess: PropTypes.bool,
  fetchOrderDetailFailed: PropTypes.bool,
  order: PropTypes.object,
};

function OrderPlacedComponent(props) {
  const history = useHistory();

  useLayoutEffect(() => {}, []);

  function handleBack() {
    history.replace("/");
  }

  function RenderToolBar() {
    return <ToolbarComponent title="Order Placed" onClick={handleBack} />;
  }

  function RenderBottomNext() {
    return <BottomNextComponent routePath="/" title="Home" />;
  }

  function RenderOrderSuccess() {
    return (
      <OrderSuccessComponent orderPrice="Rs 50000" retailerName="Kloud Bar" />
    );
  }

  function RenderArrivingComponent() {
    return <ArrivingComponent arrivalTime="Arrving Today" otp="864753" />;
  }

  function RenderTellAFriendComponent() {
    return <TellAFriendComponent />;
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
        {props.order ? (
          <OrderDrinksComponent items={props.order.items} />
        ) : (
          <div />
        )}
        {props.order ? (
          <DeliveryAddressComponent
            address={props.order.address.address}
            addressType={props.order.address.type}
          />
        ) : (
          <div />
        )}
        {props.order ? (
          <OrderSummaryComponent orderDetail={props.order.order_detail} />
        ) : (
          <div />
        )}
      </div>
      <RenderBottomNext />
    </>
  );
}

export { OrderPlacedComponent };
