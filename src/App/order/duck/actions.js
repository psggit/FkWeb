import { createAction } from "@reduxjs/toolkit";

const getOrderDetailInProgress = createAction("getOrderDetailInProgress");
const getOrderDetailSuccess = createAction("getOrderDetailSuccess");
const getOrderDetailFailed = createAction("getOrderDetailFailed");

export {
  getOrderDetailInProgress,
  getOrderDetailSuccess,
  getOrderDetailFailed,
};
