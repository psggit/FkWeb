import React, { useLayoutEffect } from "react";
import { RetailerListContainer } from "./retailerList";
import { CarouselContainer } from "./carousel";
import { CriticalAdsContainer } from "./criticalAds";
import { ChooseAddressComponent } from "./chooseAddress";
import { BottomNavigationContainer } from "../common/bottomNavigation";
import { CurretOrderComponent } from "./currentOrders";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

HomeComponent.propTypes = {
  currentOrderInProgress: PropTypes.func,
  getCurrentOrderInProgress: PropTypes.bool,
  getCurrentOrderFailed: PropTypes.bool,
  getCurrentOrderSuccess: PropTypes.bool,
  currentOrder: PropTypes.object,
  address: PropTypes.object,
  getCurrentOrdersFunc: PropTypes.func,
};

function HomeComponent(props) {
  const history = useHistory();

  useLayoutEffect(() => {
    let trigger = !(
      props.getCurrentOrderInProgress ||
      props.getCurrentOrderSuccess ||
      props.getCurrentOrderSuccess
    );
    const interval = 60000;
    if (trigger) {
      props.currentOrderInProgress();
      props.getCurrentOrdersFunc();
    }
    setInterval(() => {
      if (trigger) {
        props.currentOrderInProgress();
        props.getCurrentOrdersFunc();
      }
    }, interval);
  }, []);

  function showOrderInfo() {
    history.push("/order/info");
  }

  function showChooseAddress() {
    history.push("address/select/home");
  }

  function templateCurrentOrder(props) {
    if (props.currentOrder.order_details) {
      return (
        <CurretOrderComponent
          title={props.currentOrder.status_message}
          msg={props.currentOrder.order_details.otp}
          onClickFunc={showOrderInfo}
        />
      );
    } else {
      return <div />;
    }
  }

  return (
    <>
      <CriticalAdsContainer />
      <ChooseAddressComponent
        address={props.address}
        onClickFunc={showChooseAddress}
      />
      <CarouselContainer />
      <RetailerListContainer />
      {props.currentOrder ? templateCurrentOrder(props) : <div />}
      <BottomNavigationContainer />
    </>
  );
}

export { HomeComponent };
