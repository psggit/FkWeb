import { createAction } from "@reduxjs/toolkit";

export const createOrderInProgress = createAction("createOrderInProgress");
export const createOrderFailed = createAction("createOrderFailed");
export const createOrderSuccess = createAction("createOrderSuccess");

export const createPaymentInProgress = createAction("createPaymentInProgress");
export const createPaymentFailed = createAction("createPaymentFailed");
export const createPaymentSuccess = createAction("createPaymentSuccess");
