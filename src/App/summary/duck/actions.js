import { createAction } from "@reduxjs/toolkit";

const fetchSummaryInProgress = createAction("fetchSummaryInProgress");

const fetchSummaryFailed = createAction("fetchSummaryFailed");

const fetchSummarySuccess = createAction("fetchSummarySuccess");

const resetOnUnmount = createAction("resetOnUnmount");

export {
  fetchSummaryInProgress,
  fetchSummaryFailed,
  fetchSummarySuccess,
  resetOnUnmount,
};
