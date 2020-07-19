import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import { IframeContainer } from "./iframe";
import { AgreeAndContinueContainer } from "./agreeAndContinue";
import { UserBasicInfoContainer } from "./userBasicInfo";
import { CartContainer } from "./cart";
import Search from "./search";
import SelectAddress from "./address";
import OrderSummary from "./summary";
import PaymentOptions from "./payment";
import BottomNavigationComponent from "./common/bottomNavigation";
import { OrderPlaced } from "./order";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/user/login" component={UserBasicInfoContainer} />
          <Route path="/search" component={Search} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/address/select" component={SelectAddress} />
          <Route path="/home" component={Home} />
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
          <Route path="/order/placed" component={OrderPlaced} />
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
