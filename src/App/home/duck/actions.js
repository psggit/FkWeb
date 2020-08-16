import { createAction } from "@reduxjs/toolkit";

const getCurrentOrderInProgress = createAction("getCurrentOrderInProgress");
const getCurrentOrderSuccess = createAction("getCurrentOrderSuccess");
const getCurrentOrderFailed = createAction("getCurrentOrderFailed");
const resetOnUnmount = createAction("resetOnUnmount");

export {
  getCurrentOrderInProgress,
  getCurrentOrderSuccess,
  getCurrentOrderFailed,
  resetOnUnmount,
};
