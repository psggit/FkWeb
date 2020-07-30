import React, { useLayoutEffect } from "react";
import { HeaderComponent } from "../common/toolbar";
import "./style.scss";
import { OrderItem } from "./components";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

MyOrdersComponent.propTypes = {
  fetchOrderInProgress: PropTypes.bool,
  fetchOrderFailed: PropTypes.bool,
  fetchOrderSuccess: PropTypes.bool,
  orders: PropTypes.array,
  getMyOrdersFunc: PropTypes.func,
};

function MyOrdersComponent(props) {
  const history = useHistory();

  function showOrderDetail() {
    history.push("/order/info");
  }

  const orderItems = (props) => {
    return props.orders.map((order, key) => {
      console.log("Render" + JSON.stringify(order));
      return (
        <OrderItem
          key={key}
          title={order.display_name}
          amount={order.amount}
          date={order.created_at}
          retailerName={order.retailer_name}
          onClick={showOrderDetail}
        />
      );
    });
  };

  useLayoutEffect(() => {
    props.getMyOrdersFunc({
      offset: 0,
    });
  }, []);

  return (
    <>
      <HeaderComponent title="My Orders" />
      <div className="page-container myorders-container">
        {orderItems(props)}
      </div>
    </>
  );
}

export { MyOrdersComponent };
