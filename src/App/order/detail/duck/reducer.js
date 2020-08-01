import {
  getOrderDetailInProgress,
  getOrderDetailSuccess,
  getOrderDetailFailed,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  fetchOrderDetailInProgress: false,
  fetchOrderDetailSuccess: false,
  fetchOrderDetailFailed: false,
  order: null,
  orderDetail: null,
};

const orderDetailReducer = createReducer(initialState, {
  [getOrderDetailInProgress]: (state) => ({
    ...state,
    fetchOrderDetailInProgress: true,
    fetchOrderDetailSuccess: false,
    fetchOrderDetailFailed: false,
  }),
  [getOrderDetailSuccess]: (state, data) => ({
    ...state,
    fetchOrderDetailInProgress: false,
    fetchOrderDetailSuccess: true,
    fetchOrderDetailFailed: false,
    orderDetail: data.payload,
  }),
  [getOrderDetailFailed]: (state) => ({
    ...state,
    fetchOrderDetailInProgress: false,
    fetchOrderDetailSuccess: false,
    fetchOrderDetailFailed: true,
  }),
});

export { orderDetailReducer };
