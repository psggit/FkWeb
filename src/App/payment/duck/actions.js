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

export const verifyPaymentInProgress = createAction("verifyPaymentInProgress");
export const verifyPaymentSuccess = createAction("verifyPaymentSuccess");
export const verifyPaymentFailed = createAction("verifyPaymentFailed");
export const verifyPaymentError = createAction("verifyPaymentError");

export const placeOrderInProgress = createAction("placeOrderInProgress");
export const placeOrderSuccess = createAction("placeOrderSuccess");
export const placeOrderFailed = createAction("placeOrderFailed");
export const placeOrderError = createAction("placeOrderError");

export const takeMeHome = createAction("takeMeHome");
export const tryPayingAgain = createAction("tryPayingAgain");
