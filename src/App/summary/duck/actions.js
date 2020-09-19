import { createAction } from "@reduxjs/toolkit";

const fetchSummaryInProgress = createAction("fetchSummaryInProgress");

const fetchSummaryFailedNotInUse = createAction("fetchSummaryFailedNotInUse");

const fetchSummarySuccess = createAction("fetchSummarySuccess");

const resetOnUnmount = createAction("resetOnUnmount");

export {
  fetchSummaryInProgress,
  fetchSummaryFailedNotInUse,
  fetchSummarySuccess,
  resetOnUnmount,
};
