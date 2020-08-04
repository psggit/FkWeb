import React, { useLayoutEffect } from "react";
import { RetailerListContainer } from "./retailerList";
import { CarouselContainer } from "./carousel";
<<<<<<< HEAD
import { CriticalAdsContainer } from "./criticalAds";
=======
import { ChooseAddressComponent } from "./chooseAddress";
>>>>>>> db415e7f35527facb549a99581fd19aee7fcfccc
import BottomNavigationComponent from "../common/bottomNavigation";
import { CurretOrderComponent } from "./currentOrders";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

HomeComponent.propTypes = {
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
      <BottomNavigationComponent />
    </>
  );
}

export { HomeComponent };
