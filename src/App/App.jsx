import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import { IframeContainer } from "./iframe";
import { AgreeAndContinueContainer } from "./agreeAndContinue";
import { UserBasicInfoContainer } from "./userBasicInfo";
import { CartContainer } from "./cart";
import { MyOrdersComponent } from "./myorders";
import Search from "./search";
import { SelectAddressContainer, AddressEditContainer } from "./address";
import OrderSummary from "./summary";
import { PaymentOptions, AddCardAndProcessPayment } from "./payment";
import BottomNavigationComponent from "./common/bottomNavigation";
import { OrderPlaced } from "./order";
import { ChooseLocationContainer } from "./address/chooseLocation";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/user/login" component={UserBasicInfoContainer} />
          <Route path="/search" component={UserBasicInfoContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/myorders" component={MyOrdersComponent} />
          <Route path="/address/select" component={SelectAddressContainer} />
          <Route path="/home" component={Home} />
          <Route path="/choose/location" component={ChooseLocationContainer} />
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
          <Route path="/order/summary" component={OrderSummary} />
          <Route path="/payment/options" component={PaymentOptions} />
          <Route
            path="/payment/add/new/card"
            component={AddCardAndProcessPayment}
          />
          <Route
            path="/order/info"
            component={(props) => (
              <OrderPlaced {...props} isOrderDetail={true} />
            )}
          />
          <Route
            path="/order/cancelled"
            component={(props) => (
              <OrderPlaced {...props} isOrderCancelled={true} />
            )}
          />
          <Route
            path="/order/delivered"
            component={(props) => (
              <OrderPlaced {...props} isOrderDelivered={true} />
            )}
          />
          <Route
            path="/order/placed"
            component={(props) => (
              <OrderPlaced {...props} isOrderPlaced={true} />
            )}
          />
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
        <BottomNavigationComponent />
      </Router>
    </div>
  );
}

export default hot(App);
