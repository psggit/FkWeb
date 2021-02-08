import { createAction } from "@reduxjs/toolkit";

const fetchAvailableVoucherProgress = createAction(
  "fetchAvailableVoucherProgress"
);

const fetchAvailableVoucherSuccess = createAction(
  "fetchAvailableVoucherSuccess"
);

const fetchAvailableVoucherFailed = createAction("fetchAvailableVoucherFailed");

const searchVoucherProgress = createAction("searchVoucherProgress");

const searchVoucherSuccess = createAction("searchVoucherSuccess");

const searchVoucherFailed = createAction("searchVoucherFailed");

const resetOnUnmount = createAction("resetOnUnmount");

const resetPromo = createAction("resetPromo");

export {
  fetchAvailableVoucherProgress,
  fetchAvailableVoucherSuccess,
  fetchAvailableVoucherFailed,
  searchVoucherProgress,
  searchVoucherSuccess,
  searchVoucherFailed,
  resetOnUnmount,
  resetPromo,
};
