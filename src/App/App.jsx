import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeContainer } from "./home";
import { IframeComponent } from "./iframe";
import { AgreeAndContinueContainer } from "./agreeAndContinue";
import { UserBasicInfoContainer } from "./userBasicInfo";
import { CartContainer } from "./cart";
import { SearchByStoreContainer } from "./searchByStore";
import { MyOrdersContainer } from "./myorders";
import { SelectAddressContainer, AddressEditContainer } from "./address";
import { SearchContainer } from "./search";
import { StoreFrontContainer } from "./storeFront";
import { OrderSummaryContainer } from "./summary";
import {
  PaymentContainer,
  ProcessPaymentContainer,
  PaymentVerifyContainer,
} from "./payment";
import { ChooseLocationContainer } from "./address/chooseLocation";
import { OrderDetailsContainer, OrderPlacedContainer } from "./order";
import { StateCityContainer } from "./stateCity";
import { OrderInfoContainer } from "./order/info";
import config from "../config";

const DOMAIN = config.BASE_DOMAIN;

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/user/login" component={UserBasicInfoContainer} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/searchbystore" component={SearchByStoreContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route
            path="/address/create/:redirect"
            component={AddressEditContainer}
          />
          <Route path="/my-orders" component={MyOrdersContainer} />
          <Route
            path="/address/select/:redirect"
            component={SelectAddressContainer}
          />
          <Route path="/home" component={HomeContainer} />
          <Route path="/statecity/select" component={StateCityContainer} />
          <Route
            path="/choose/location/:redirect"
            component={ChooseLocationContainer}
          />
          <Route path="/storefront" component={StoreFrontContainer} />
          <Route
            path="/user-terms"
            component={() => (
              <IframeComponent
                url={"https://" + DOMAIN + "/user-terms"}
                title={`Terms And Conditions`}
              />
            )}
          />
          <Route
            path="/privacy-policy"
            component={() => (
              <IframeComponent
                url={"https://" + DOMAIN + "/privacy"}
                title={`Privacy Policy`}
              />
            )}
          />
          <Route
            path="/grievance-policy"
            component={() => (
              <IframeComponent
                url={"https://" + DOMAIN + "/grievance-policy"}
                title={`Grievance Policy`}
              />
            )}
          />
          <Route path="/order/summary" component={OrderSummaryContainer} />
          <Route path="/payment/options" component={PaymentContainer} />

          <Route
            path="/payment/verify/order/:order_id"
            component={PaymentVerifyContainer}
          />
          <Route path="/order/detail" component={OrderDetailsContainer} />
          <Route path="/order/placed" component={OrderPlacedContainer} />
          <Route path="/order/info" component={OrderInfoContainer} />
          <Route path="/payment" component={ProcessPaymentContainer} />
          <Route path="/" component={AgreeAndContinueContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
