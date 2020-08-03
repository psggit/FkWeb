import { createAction } from "@reduxjs/toolkit";

const getCurrentOrderInProgress = createAction("getCurrentOrderInProgress");
const getCurrentOrderSuccess = createAction("getCurrentOrderSuccess");
const getCurrentOrderFailed = createAction("getCurrentOrderFailed");

export {
  getCurrentOrderInProgress,
  getCurrentOrderSuccess,
  getCurrentOrderFailed,
};
