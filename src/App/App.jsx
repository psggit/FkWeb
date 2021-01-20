import React from "react";
import { hot } from "react-hot-loader/root";
import Loadable from "react-loadable";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { IframeComponent } from "./iframe";
import { UPIVerifyContainer } from "./payment/upiVerifyContainer";
import { AgreeAndContinueContainer } from "./agreeAndContinue";
import { ExternalPaymentsContainer } from "./ext-payments";
import { PaymentStatusContainer } from "./ext-payments/verifyWebPayment/paymentStatusContainer";
import config from "../config";
import { Loading } from "../utils";

const OrderInfoContainer = Loadable({
  loader: () =>
    import("./order/info").then((module) => module.OrderInfoContainer),
  loading: Loading,
});

const PaymentContainer = Loadable({
  loader: () => import("./payment").then((module) => module.PaymentContainer),
  loading: Loading,
});

const ProcessPaymentContainer = Loadable({
  loader: () =>
    import("./payment").then((module) => module.ProcessPaymentContainer),
  loading: Loading,
});

const PaymentVerifyContainer = Loadable({
  loader: () =>
    import("./payment").then((module) => module.PaymentVerifyContainer),
  loading: Loading,
});

const SelectAddressContainer = Loadable({
  loader: () =>
    import("./address").then((module) => module.SelectAddressContainer),
  loading: Loading,
});

const AddressEditContainer = Loadable({
  loader: () =>
    import("./address").then((module) => module.AddressEditContainer),
  loading: Loading,
});

const CartContainer = Loadable({
  loader: () => import("./cart").then((module) => module.CartContainer),
  loading: Loading,
});

const UserBasicInfoContainer = Loadable({
  loader: () =>
    import("./userBasicInfo").then((module) => module.UserBasicInfoContainer),
  loading: Loading,
});

const LoginContainer = Loadable({
  loader: () => import("./login").then((module) => module.LoginContainer),
  loading: Loading,
});

const OrderPlacedContainer = Loadable({
  loader: () => import("./order").then((module) => module.OrderPlacedContainer),
  loading: Loading,
});

const OrderDetailsContainer = Loadable({
  loader: () =>
    import("./order").then((module) => module.OrderDetailsContainer),
  loading: Loading,
});

const SearchByStoreContainer = Loadable({
  loader: () =>
    import("./searchByStore").then((module) => module.SearchByStoreContainer),
  loading: Loading,
});

const ChooseLocationContainer = Loadable({
  loader: () =>
    import("./address/chooseLocation").then(
      (module) => module.ChooseLocationContainer
    ),
  loading: Loading,
});

const HomeContainer = Loadable({
  loader: () => import("./home").then((module) => module.HomeContainer),
  loading: Loading,
});

const MyOrdersContainer = Loadable({
  loader: () => import("./myorders").then((module) => module.MyOrdersContainer),
  loading: Loading,
});

const SearchContainer = Loadable({
  loader: () => import("./search").then((module) => module.SearchContainer),
  loading: Loading,
});

const StateCityContainer = Loadable({
  loader: () =>
    import("./stateCity").then((module) => module.StateCityContainer),
  loading: Loading,
});

const StoreFrontContainer = Loadable({
  loader: () =>
    import("./storeFront").then((module) => module.StoreFrontContainer),
  loading: Loading,
});

const OrderSummaryContainer = Loadable({
  loader: () =>
    import("./summary").then((module) => module.OrderSummaryContainer),
  loading: Loading,
});

const DOMAIN = config.BASE_DOMAIN;

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/user/login/:redirect"
            component={(props) => <LoginContainer {...props} />}
          />
          <Route
            path="/user/login"
            component={(props) => <LoginContainer {...props} />}
          />
          <Route
            path="/user/userBasicInfo"
            component={(props) => <UserBasicInfoContainer {...props} />}
          />
          <Route
            path="/search"
            component={(props) => <SearchContainer {...props} />}
          />
          <Route
            path="/searchbystore"
            component={(props) => <SearchByStoreContainer {...props} />}
          />
          <Route
            path="/cart"
            component={(props) => <CartContainer {...props} />}
          />
          <Route
            path="/address/create/:redirect"
            component={(props) => <AddressEditContainer {...props} />}
          />
          <Route
            path="/my-orders"
            component={(props) => <MyOrdersContainer {...props} />}
          />
          <Route
            path="/address/select/:redirect"
            component={SelectAddressContainer}
          />
          <Route
            path="/home"
            component={(props) => <HomeContainer {...props} />}
          />
          <Route
            path="/statecity/select"
            component={(props) => <StateCityContainer {...props} />}
          />
          <Route
            path="/choose/location/:redirect"
            component={(props) => <ChooseLocationContainer {...props} />}
          />
          <Route
            path="/storefront"
            component={(props) => <StoreFrontContainer {...props} />}
          />
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
          <Route
            path="/order/summary"
            component={(props) => <OrderSummaryContainer {...props} />}
          />
          <Route
            path="/payment/options"
            component={(props) => <PaymentContainer {...props} />}
          />

          <Route
            path="/payment/upi/verify/:time_limit/:txn_id/:order_id"
            component={UPIVerifyContainer}
          />

          <Route
            path="/payment/verify/order/:order_id"
            component={(props) => <PaymentVerifyContainer {...props} />}
          />
          <Route
            path="/order/detail"
            component={(props) => <OrderDetailsContainer {...props} />}
          />
          <Route
            path="/order/placed"
            component={(props) => <OrderPlacedContainer {...props} />}
          />
          <Route
            path="/order/info"
            component={(props) => <OrderInfoContainer {...props} />}
          />
          <Route
            path="/payment"
            component={(props) => <ProcessPaymentContainer {...props} />}
          />
          <Route
            path="/order/payment/:orderId"
            component={(props) => <ExternalPaymentsContainer {...props} />}
          />
          <Route
            path="/order/payment/:orderId/new"
            component={(props) => <ExternalPaymentsContainer {...props} />}
          />
          <Route
            path="/order/webpayment/verify/:order_id"
            component={(props) => <PaymentStatusContainer {...props} />}
          />
          <Route
            path="/tandc/:redirect"
            component={AgreeAndContinueContainer}
          />
          <Route path="/" component={AgreeAndContinueContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
