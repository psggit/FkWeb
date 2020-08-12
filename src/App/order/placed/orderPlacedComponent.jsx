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

OrderPlacedComponent.propTypes = {
  payment: PropTypes.object,
  clearCart: PropTypes.func,
};

const getSummaryProps = (orderDetails) => {
  return {
    ...orderDetails,
    display_total_paid: orderDetails.display_order_total,
  };
};

function OrderPlacedComponent(props) {
  const history = useHistory();
  let order = props.payment.placeOrderDetails.order_details;
  let productDetails = order.pdt_details.map((item) => {
    return { ...item, reserved_price: item.display_price };
  });

  useLayoutEffect(() => {
    props.clearCart();
  }, []);

  function handleBack() {
    history.replace("/");
  }

  function RenderToolBar() {
    return (
      <ToolbarComponent
        backVisibility={false}
        title="Order Placed"
        onClick={handleBack}
      />
    );
  }

  function RenderBottomNext() {
    return <BottomNextComponent routePath="/home" title="Home" />;
  }

  function RenderOrderSuccess() {
    return (
      <OrderSuccessComponent
        orderPrice={order.display_order_total}
        retailerName={order.retailer_name}
      />
    );
  }

  function RenderArrivingComponent() {
    return (
      <ArrivingComponent arrivalTime={order.delivery_status} otp={order.otp} />
    );
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
        <OrderDrinksComponent items={productDetails} />
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

export { OrderPlacedComponent };
