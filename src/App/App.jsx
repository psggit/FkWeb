import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeContainer } from "./home";
import { IframeContainer } from "./iframe";
import { AgreeAndContinueContainer } from "./agreeAndContinue";
import { UserBasicInfoContainer } from "./userBasicInfo";
import { CartContainer } from "./cart";
import { SearchByStoreContainer } from "./searchByStore";
import { MyOrdersContainer } from "./myorders";
import { SelectAddressContainer, AddressEditContainer } from "./address";
import { SearchContainer } from "./search";
import { StoreFrontContainer } from "./storeFront";
import { OrderSummaryContainer } from "./summary";
import { PaymentContainer, AddCardAndProcessPayment } from "./payment";
import { ChooseLocationContainer } from "./address/chooseLocation";
import { OrderDetailsContainer, OrderPlacedContainer } from "./order";
import { StateCityContainer } from "./stateCity";
import { OrderInfoContainer } from "./order/info";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/user/login" component={UserBasicInfoContainer} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/searchbystore" component={SearchByStoreContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/address/create" component={AddressEditContainer} />
          <Route path="/myorders" component={MyOrdersContainer} />
          <Route
            path="/address/select/:redirect"
            component={SelectAddressContainer}
          />
          <Route path="/home" component={HomeContainer} />
          <Route path="/statecity/select" component={StateCityContainer} />
          <Route path="/choose/location" component={ChooseLocationContainer} />
          <Route path="/storefront" component={StoreFrontContainer} />
          <Route
            path="/user-terms"
            component={() => (
              <IframeContainer
                url={"https://hipbar.com/user-terms"}
                title={`Terms And Condition`}
              />
            )}
          />
          <Route
            path="/privacy-policy"
            component={() => (
              <IframeContainer
                url={"https://hipbar.com/user-terms"}
                title={`Privacy Policy`}
              />
            )}
          />
          <Route
            path="/grievance-policy"
            component={() => (
              <IframeContainer
                url={"https://hipbar.com/user-terms"}
                title={`Grievance Policy`}
              />
            )}
          />
          <Route path="/order/summary" component={OrderSummaryContainer} />
          <Route path="/payment/options" component={PaymentContainer} />
          <Route
            path="/payment/add/new/card"
            component={AddCardAndProcessPayment}
          />
          <Route path="/order/detail" component={OrderDetailsContainer} />
          <Route path="/order/placed" component={OrderPlacedContainer} />
          <Route path="/order/info" component={OrderInfoContainer} />
          <Route
            path="/payment"
            component={() => (
              <IframeContainer
                url={"https://hipbar.com/user-terms"}
                title={`Payment`}
              />
            )}
          />
          <Route path="/" component={AgreeAndContinueContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);