import { createAction } from "@reduxjs/toolkit";

const getOrderInProgress = createAction("getOrderInProgress");
const getOrderSuccess = createAction("getOrderSuccess");
const getOrderFailed = createAction("getOrderFailed");
const unMountAction = createAction("unMountAction");
const paginationAction = createAction("myOrdersPagination");

export {
  getOrderInProgress,
  getOrderSuccess,
  paginationAction,
  getOrderFailed,
  unMountAction,
};
