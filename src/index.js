import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./App/home/duck";
import { combineReducers } from "redux";

import { App } from "./App";
import "./styles.scss";

const store = configureStore({
  reducer: combineReducers({
    name: homeReducer,
  }),
});

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
