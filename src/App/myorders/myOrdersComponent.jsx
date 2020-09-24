import React, { useLayoutEffect } from "react";
import { HeaderComponent } from "../common/toolbar";
import "./style.scss";
import { OrderItem } from "./components";
import { useHistory, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { BottomNavigationContainer } from "../common/bottomNavigation";
import { SplashLoadingComponent } from "../common/splashLoading";
import { drinksIcon } from "../../assets/images";
import { HelpComponent } from "../common/help";

MyOrdersComponent.propTypes = {
  fetchOrderInProgress: PropTypes.bool,
  fetchOrderFailed: PropTypes.bool,
  fetchOrderSuccess: PropTypes.bool,
  loginSuccess: PropTypes.bool,
  offset: PropTypes.number,
  orders: PropTypes.array,
  getMyOrdersFunc: PropTypes.func,
  unMountAction: PropTypes.func,
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
    if (props.orders.length === 0 && props.fetchOrderSuccess === true) {
      return <div className="search-message-container">No Past Orders.</div>;
    }
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
    return () => {
      window.fcWidget.close();
      props.unMountAction();
    };
  }, []);

  if (!props.loginSuccess) {
    return <Redirect to="/user/login/my_orders" />;
  } else {
    return (
      <>
        <HeaderComponent title="My Orders" />
        {props.fetchOrderInProgress && (
          <SplashLoadingComponent
            motion={true}
            icon={drinksIcon}
            text="Fetching Past Orders"
          />
        )}
        <div className="page-container">
          <HelpComponent launchHelp={() => launchHelp()} />
          <div className="past-orders">Past Orders</div>
          {orderItems(props)}
          {props.orders.length === props.offset && props.orders.length != 0 && (
            <div
              onClick={() =>
                props.getMyOrdersFunc({
                  offset: props.offset,
                })
              }
              className="loadMore flex hcenter vcenter"
            >
              Load more
            </div>
          )}
        </div>
        <div className="padding-btm" />
        <BottomNavigationContainer />
      </>
    );
  }
}

export { MyOrdersComponent };
