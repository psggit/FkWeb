import { createAction } from "@reduxjs/toolkit";

export const createOrderInProgress = createAction("createOrderInProgress");
export const createOrderFailed = createAction("createOrderFailed");
export const createOrderSuccess = createAction("createOrderSuccess");

export const fetchPaymentOptionsInProgress = createAction(
  "fetchPaymentOptionsInProgress"
);
export const fetchPaymentOptionsFailed = createAction(
  "fetchPaymentOptionsFailed"
);
export const fetchPaymentOptionsSuccess = createAction(
  "fetchPaymentOptionsSuccess"
);

export const createPaymentInProgress = createAction("createPaymentInProgress");
export const createPaymentFailed = createAction("createPaymentFailed");
export const createPaymentSuccess = createAction("createPaymentSuccess");

export const initialTrigger = createAction("initialTrigger");
