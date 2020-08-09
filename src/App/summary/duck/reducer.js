import { createReducer } from "@reduxjs/toolkit";
import {
  fetchSummaryInProgress,
  fetchSummaryFailed,
  fetchSummarySuccess,
  resetOnUnmount,
} from "./actions";

let initialState = {
  summaryDetails: {},
  fetchSummaryInProgress: false,
  fetchSummaryFailed: false,
  fetchSummarySuccess: false,
  fetchSummaryError: false,
  fetchSummaryLocationError: false,
  fetchSummaryErrorMessage: "",
};

const handleSummarySuccess = (state, data) => {
  if (data.statusCode === 0) {
    state = {
      ...state,
      summaryDetails: data.summary_details,
      fetchSummaryInProgress: false,
      fetchSummaryFailed: false,
      fetchSummarySuccess: true,
      fetchSummaryError: false,
      fetchSummaryLocationError: false,
      fetchSummaryErrorMessage: "",
    };
  } else if (data.statusCode === 30003) {
    state = {
      ...state,
      summaryDetails: data.summary_details,
      fetchSummaryInProgress: false,
      fetchSummaryFailed: false,
      fetchSummarySuccess: true,
      fetchSummaryError: false,
      fetchSummaryLocationError: true,
      fetchSummaryErrorMessage: data.message,
    };
  } else {
    state = {
      ...state,
      summaryDetails: data.summary_details,
      fetchSummaryInProgress: false,
      fetchSummaryFailed: false,
      fetchSummarySuccess: true,
      fetchSummaryError: true,
      fetchSummaryLocationError: false,
      fetchSummaryErrorMessage: data.message,
    };
  }
  return state;
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
    return handleSummarySuccess(state, e.payload);
  },
  [resetOnUnmount]: (state) => {
    return {
      ...state,
      fetchSummaryInProgress: false,
      fetchSummaryFailed: false,
      fetchSummarySuccess: false,
      fetchSummaryError: false,
      fetchSummaryLocationError: false,
      fetchSummaryErrorMessage: "",
    };
  },
});

export { summaryReducer };
