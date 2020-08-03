import React, { useLayoutEffect } from "react";
import { RetailerListContainer } from "./retailerList";
import { CarouselContainer } from "./carousel";
import { CriticalAdsContainer } from "./criticalAds";
import BottomNavigationComponent from "../common/bottomNavigation";
import { CurretOrderComponent } from "./currentOrders";
import PropTypes from "prop-types";

HomeComponent.propTypes = {
  getCurrentOrderInProgress: PropTypes.bool,
  getCurrentOrderFailed: PropTypes.bool,
  getCurrentOrderSuccess: PropTypes.bool,
  currentOrder: PropTypes.object,
  getCurrentOrdersFunc: PropTypes.func,
};

function HomeComponent(props) {
  useLayoutEffect(() => {
    props.getCurrentOrdersFunc();
  }, []);

  function showOrderInfo() {
    history.push({
      pathname: "/order/info",
      state: {
        currentOrder: props.currentOrder,
      },
    });
  }

  function templateCurrentOrder(props) {
    console.log(props.currentOrder);
    if (props.currentOrder.order_details) {
      return (
        <CurretOrderComponent
          title={props.currentOrder.status_message}
          msg={props.currentOrder.order_details.otp}
          onClick={showOrderInfo}
        />
      );
    } else {
      return <div />;
    }
  }

  return (
    <>
      <CriticalAdsContainer />
      <CarouselContainer />
      <RetailerListContainer />
      {props.currentOrder ? templateCurrentOrder(props) : <div />}
      <BottomNavigationComponent />
    </>
  );
}

export { HomeComponent };
