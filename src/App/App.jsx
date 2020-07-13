import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import Cart from "./cart";
import Search from "./search";
import SelectAddress from "./address";
import Navigation from "./common/navigation";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/cart" component={Cart} />
          <Route path="/address/select" component={SelectAddress} />
          <Route path="/" component={Home} />
        </Switch>

        <Navigation />
      </Router>
    </div>
  );
}

export default hot(App);
