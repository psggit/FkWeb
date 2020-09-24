import React, { useLayoutEffect } from "react";
import { RetailerListContainer } from "./retailerList";
import { CarouselContainer } from "./carousel";
import { CriticalAdsContainer } from "./criticalAds";
import { ChooseAddressComponent } from "./chooseAddress";
import { BottomNavigationContainer } from "../common/bottomNavigation";
import { CurretOrderComponent } from "./currentOrders";
import PropTypes from "prop-types";
import { useHistory, Redirect } from "react-router-dom";
import { LoadingComponent } from "../common/loading";

HomeComponent.propTypes = {
  currentOrderInProgress: PropTypes.func,
  getCurrentOrderInProgress: PropTypes.bool,
  getCurrentOrderFailed: PropTypes.bool,
  getCurrentOrderSuccess: PropTypes.bool,
  currentOrder: PropTypes.object,
  address: PropTypes.object,
  getCurrentOrdersFunc: PropTypes.func,
  resetOnUnmount: PropTypes.func,
  getHomeCarouselInProgress: PropTypes.bool,
  retailerFetchStatus: PropTypes.string,
};

function HomeComponent(props) {
  const history = useHistory();

  useLayoutEffect(() => {
    const interval = 30000;
    props.currentOrderInProgress();
    props.getCurrentOrdersFunc();
    let iid = setInterval(() => {
      props.currentOrderInProgress();
      props.getCurrentOrdersFunc();
    }, interval);
    return () => {
      clearInterval(iid);
      props.resetOnUnmount();
    };
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
  const loading =
    props.getHomeCarouselInProgress ||
    props.retailerFetchStatus === "inProgress";

  if (!props.address) {
    return <Redirect to="/stateCity" />;
  }
  return (
    <>
      {loading && <LoadingComponent />}
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
