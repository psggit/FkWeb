import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./home";
import { AgreeAndContinueContainer } from "./agreeAndContinue";
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
            <Navigation />
          </Route>
          <Route path="/cart">
            <Cart />
            <Navigation />
          </Route>
          <Route path="/home">
            <Home />
            <Navigation />
          </Route>
          <Route path="/">
            <AgreeAndContinueContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default hot(App);
