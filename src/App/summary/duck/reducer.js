import { createReducer } from "@reduxjs/toolkit";
import {
  fetchSummaryInProgress,
  fetchSummaryFailed,
  fetchSummarySuccess,
} from "./actions";

let initialState = {
  summaryDetails: {},
  fetchSummaryInProgress: false,
  fetchSummaryFailed: false,
  fetchSummarySuccess: false,
  fetchSummaryError: false,
  fetchSummaryErrorMessage: "",
};

const summaryReducer = createReducer(initialState, {
  [fetchSummaryInProgress]: (state) => {
    return {
      ...state,
      fetchSummaryInProgress: true,
      fetchSummaryFailed: false,
      fetchSummarySuccess: false,
    };
  },
  [fetchSummaryFailed]: (state) => {
    return {
      ...state,
      fetchSummaryInProgress: false,
      fetchSummaryFailed: true,
      fetchSummarySuccess: false,
    };
  },
  [fetchSummarySuccess]: (state, e) => {
    return {
      ...state,
      summaryDetails: e.payload.summary_details,
      fetchSummaryInProgress: false,
      fetchSummaryFailed: false,
      fetchSummarySuccess: true,
    };
  },
});

export { summaryReducer };
