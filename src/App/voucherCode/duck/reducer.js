import { createReducer } from "@reduxjs/toolkit";
import {
  fetchAvailableVoucherProgress,
  fetchAvailableVoucherSuccess,
  fetchAvailableVoucherFailed,
  searchVoucherProgress,
  searchVoucherSuccess,
  searchVoucherFailed,
  resetOnUnmount,
  resetPromo,
} from "./action";

let initialState = {
  fetchAvailableVoucherProgress: false,
  fetchAvailableVoucherSuccess: false,
  fetchAvailableVoucherFailed: false,
  searchVoucherProgress: false,
  searchVoucherSuccess: false,
  searchVoucherFailed: false,
  availableVoucherList: [],
  searchVoucherData: null,
  availableVoucherError: "",
  searchVoucherError: "",
};

const voucherCodesReducer = createReducer(initialState, {
  [fetchAvailableVoucherProgress]: (state) => {
    return {
      ...state,
      fetchAvailableVoucherProgress: true,
      fetchAvailableVoucherSuccess: false,
      fetchAvailableVoucherFailed: false,
    };
  },

  [fetchAvailableVoucherSuccess]: (state, data) => {
    return {
      ...state,
      fetchAvailableVoucherProgress: false,
      fetchAvailableVoucherSuccess: true,
      fetchAvailableVoucherFailed: false,
      availableVoucherList: data.payload,
    };
  },
  [fetchAvailableVoucherFailed]: (state) => {
    return {
      ...state,
      fetchAvailableVoucherProgress: false,
      fetchAvailableVoucherSuccess: false,
      fetchAvailableVoucherFailed: true,
      availableVoucherError: "Try Again!",
    };
  },
  [searchVoucherProgress]: (state) => {
    return {
      ...state,
      searchVoucherProgress: true,
      searchVoucherSuccess: false,
      searchVoucherFailed: false,
    };
  },

  [searchVoucherSuccess]: (state, data) => {
    return {
      ...state,
      searchVoucherProgress: false,
      searchVoucherSuccess: true,
      searchVoucherFailed: false,
      searchVoucherData: data.payload,
    };
  },
  [searchVoucherFailed]: (state, data) => {
    console.log("reducer", data.payload.message);
    return {
      ...state,
      searchVoucherProgress: false,
      searchVoucherSuccess: false,
      searchVoucherFailed: true,
      searchVoucherError: data.payload.message,
    };
  },
  [resetOnUnmount]: (state) => {
    return {
      ...state,
      searchVoucherProgress: false,
      searchVoucherSuccess: false,
      searchVoucherFailed: false,
    };
  },
  [resetPromo]: (state) => {
    return {
      ...state,
      searchVoucherData: null,
    };
  },
});

export { voucherCodesReducer };
