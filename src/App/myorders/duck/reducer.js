import { getOrderInProgress, getOrderSuccess, getOrderFailed } from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  fetchOrderInProgress: false,
  fetchOrderSuccess: false,
  fetchOrderFailed: false,
  myOrders: [],
};

const myOrdersReducer = createReducer(initialState, {
  [getOrderInProgress]: (state) => ({
    ...state,
    fetchOrderInProgress: true,
    fetchOrderSuccess: false,
    fetchOrderFailed: false,
  }),
  [getOrderSuccess]: (state, data) => ({
    ...state,
    fetchOrderInProgress: false,
    fetchOrderSuccess: true,
    fetchOrderFailed: false,
    myOrders: state.myOrders.concat(data.payload),
  }),
  [getOrderFailed]: (state) => ({
    ...state,
    fetchOrderInProgress: false,
    fetchOrderSuccess: false,
    fetchOrderFailed: true,
  }),
});

export { myOrdersReducer };
