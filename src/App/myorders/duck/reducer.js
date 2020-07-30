import { getOrderInProgress, getOrderSuccess, getOrderFailed } from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  getOrderInProgress: false,
  getOrderSuccess: false,
  getOrderFailed: false,
  myOrders: [],
};

const myOrdersReducer = createReducer(initialState, {
  [getOrderInProgress]: (state) => ({
    ...state,
    getOrderInProgress: true,
    getOrderSuccess: false,
    getOrderFailed: false,
  }),
  [getOrderSuccess]: (state, data) => ({
    ...state,
    getOrderInProgress: false,
    getOrderSuccess: true,
    getOrderFailed: false,
    myOrders: state.myOrders.concat(data),
  }),
  [getOrderFailed]: (state) => ({
    ...state,
    getOrderInProgress: false,
    getOrderSuccess: false,
    getOrderFailed: true,
  }),
});

export { myOrdersReducer };
