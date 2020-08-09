import React, { useLayoutEffect } from "react";
import { HeaderComponent } from "../common/toolbar";
import "./style.scss";
import { OrderItem } from "./components";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { BottomNavigationContainer } from "../common/bottomNavigation";

MyOrdersComponent.propTypes = {
  fetchOrderInProgress: PropTypes.bool,
  fetchOrderFailed: PropTypes.bool,
  fetchOrderSuccess: PropTypes.bool,
  orders: PropTypes.array,
  getMyOrdersFunc: PropTypes.func,
};


function MyOrdersComponent(props) {
  const history = useHistory();
  function launchHelp() {
    window.fcWidget.open()
    window.fcWidget.show()
  }
  function showOrderDetail(order) {
    history.push({ pathname: "/order/detail", state: { order: order } });
  }

  const orderItems = (props) => {
    return props.orders.map((order) => {
      return (
        <OrderItem
          key={order.order_id}
          title={order.display_name}
          amount={order.amount}
          date={order.created_at}
          retailerName={order.retailer_name}
          onClick={() => {
            showOrderDetail(order);
          }}
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
      <div onClick={() => launchHelp()} className="needHelp">
        Need help
      </div>
      <div className="page-container myorders-container">
        {orderItems(props)}
      </div>
      <BottomNavigationContainer />
    </>
  );
}

export { MyOrdersComponent };
