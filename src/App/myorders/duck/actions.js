import { createAction } from "@reduxjs/toolkit";

const getOrderInProgress = createAction("getOrderInProgress");
const getOrderSuccess = createAction("getOrderSuccess");
const getOrderFailed = createAction("getOrderFailed");

export { getOrderInProgress, getOrderSuccess, getOrderFailed };
