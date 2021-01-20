import {
  fetchOrderSummaryProgress,
  fetchOrderSummarySuccess,
  fetchOrderSummaryFailure,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  fetchOrderSummaryProgress: false,
  fetchOrderSummarySuccess: false,
  fetchOrderSummaryFailure: false,
  summaryDetails: null,
};

const webPaymentReducer = createReducer(initialState, {
  [fetchOrderSummarySuccess]: (state, data) => ({
    ...state,
    fetchOrderSummaryProgress: false,
    fetchOrderSummarySuccess: true,
    fetchOrderSummaryFailure: false,
    summaryDetails: data.payload,
  }),
  [fetchOrderSummaryFailure]: (state) => ({
    ...state,
    fetchOrderSummaryProgress: false,
    fetchOrderSummarySuccess: false,
    fetchOrderSummaryFailure: true,
  }),
  [fetchOrderSummaryProgress]: (state) => ({
    ...state,
    fetchOrderSummaryProgress: true,
    fetchOrderSummarySuccess: false,
    fetchOrderSummaryFailure: false,
  }),
});

export { webPaymentReducer };
