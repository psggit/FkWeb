import React, { useLayoutEffect } from "react";
import { HeaderComponent } from "../common/toolbar";
import "./style.scss";
import { OrderItem } from "./components";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { BottomNavigationContainer } from "../common/bottomNavigation";
import { rightArrowIcon } from "../../assets/images";

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
    window.fcWidget.open();
    window.fcWidget.show();
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
      <div className="page-container">
        <div onClick={() => launchHelp()} className="need-help-container ">
          <div className="help-content-container">
            <div className="help-title">Help</div>
            <div className="help-sub-content">FAQs & Contact Support</div>
          </div>
          <img src={rightArrowIcon} className="help-next-icon" />
        </div>
        <div className="past-orders">Past Orders</div>
        {orderItems(props)}
      </div>
      <div className="padding-btm" />
      <BottomNavigationContainer />
    </>
  );
}

export { MyOrdersComponent };
