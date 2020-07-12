import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import Cart from "./cart";
import Search from "./search";
import Navigation from "./common/navigation";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default hot(App);
