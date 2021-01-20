import { createAction } from "@reduxjs/toolkit";

const initialise = createAction("initialise");
const createPayment = createAction("createPayment");

const fetchOrderSummaryProgress = createAction("fetchOrderSummaryProgress");
const fetchOrderSummarySuccess = createAction("fetchOrderSummarySuccess");
const fetchOrderSummaryFailure = createAction("fetchOrderSummaryFailure");

export {
  initialise,
  createPayment,
  fetchOrderSummaryProgress,
  fetchOrderSummarySuccess,
  fetchOrderSummaryFailure,
};
