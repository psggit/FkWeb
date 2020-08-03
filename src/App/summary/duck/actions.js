import { createAction } from "@reduxjs/toolkit";

const fetchSummaryInProgress = createAction("fetchSummaryInProgress");

const fetchSummaryFailed = createAction("fetchSummaryFailed");

const fetchSummarySuccess = createAction("fetchSummarySuccess");

export { fetchSummaryInProgress, fetchSummaryFailed, fetchSummarySuccess };
