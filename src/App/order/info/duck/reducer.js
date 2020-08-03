import {
  getOrderDetailInProgress,
  getOrderDetailSuccess,
  getOrderDetailFailed,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  order: null,
};

const orderInfoReducer = createReducer(initialState, {
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
    order: data.payload,
  }),
  [getOrderDetailFailed]: (state) => ({
    ...state,
    fetchOrderDetailInProgress: false,
    fetchOrderDetailSuccess: false,
    fetchOrderDetailFailed: true,
  }),
});

export { orderInfoReducer };
