import {
  getOrderInProgress,
  getOrderSuccess,
  getOrderFailed,
  unMountAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  fetchOrderInProgress: false,
  fetchOrderSuccess: false,
  fetchOrderFailed: false,
  myOrders: [],
};

function removeDuplicates(data) {
  return data.filter(
    (order, index, self) =>
      index === self.findIndex((o) => o.order_id === order.order_id)
  );
}

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
    myOrders: removeDuplicates(state.myOrders.concat(data.payload)),
  }),

  [getOrderFailed]: (state) => ({
    ...state,
    fetchOrderInProgress: false,
    fetchOrderSuccess: false,
    fetchOrderFailed: true,
  }),

  [unMountAction]: (state) => ({
    ...state,
    fetchOrderInProgress: false,
    fetchOrderSuccess: false,
    fetchOrderFailed: false,
  }),
});

export { myOrdersReducer };
