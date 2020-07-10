import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "./App/home/duck";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import * as Sentry from "@sentry/react";

import { App } from "./App";
import "./styles.scss";

Sentry.init({
  dsn: "https://5b4b4508b0ec4e9ba02ef4e0d3cb381b@sty.hipbar.com/10",
  environment: ARGS_SENTRY_ENV,
  release: ARGS_SENTRY_RELEASE,
});

const store = configureStore({
  reducer: combineReducers({
    name: homeReducer,
  }),
  middleware: [thunk],
});

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
