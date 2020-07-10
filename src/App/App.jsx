import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import Cart from "./Cart";
import Search from "./Search";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default hot(App);
