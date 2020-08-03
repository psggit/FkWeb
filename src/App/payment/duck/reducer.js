import { createReducer } from "@reduxjs/toolkit";
import {
  createOrderInProgress,
  createOrderFailed,
  createOrderSuccess,
  createPaymentInProgress,
  createPaymentFailed,
  createPaymentSuccess,
  fetchPaymentOptionsInProgress,
  fetchPaymentOptionsFailed,
  fetchPaymentOptionsSuccess,
} from "./actions";

let initialState = {
  //Payment Options store
  fetchPaymentOptionsDetails: {},
  fetchPaymentOptionsInProgress: false,
  fetchPaymentOptionsFailed: false,
  fetchPaymentOptionsSuccess: false,
  fetchPaymentOptionsError: false,
  fetchPaymentOptionsErrorMessage: false,

  //Payment store
  createPaymentDetails: {},
  createPaymentInProgress: false,
  createPaymentFailed: false,
  createPaymentSuccess: false,
  createPaymentError: false,
  createPaymentErrorMessage: false,

  //Order store
  orderDetails: {},
  createOrderInProgress: false,
  createOrderFailed: false,
  createOrderSuccess: false,
  createOrderError: false,
  createOrderErrorMessage: "",
};

const paymentReducer = createReducer(initialState, {
  [createOrderInProgress]: (state) => {
    return {
      ...state,
      createOrderInProgress: true,
      createOrderFailed: false,
      createOrderSuccess: false,
      createOrderError: false,
      createOrderErrorMessage: "",
    };
  },

  [createOrderFailed]: (state) => {
    return {
      ...state,
      createOrderInProgress: true,
      createOrderFailed: false,
      createOrderSuccess: false,
      createOrderError: false,
      createOrderErrorMessage: "",
    };
  },

  [createOrderSuccess]: (state) => {
    return {
      ...state,
      createOrderInProgress: true,
      createOrderFailed: false,
      createOrderSuccess: false,
      createOrderError: false,
      createOrderErrorMessage: "",
    };
  },

  [createPaymentInProgress]: (state) => {
    return {
      ...state,

      createPaymentInProgress: true,
      createPaymentFailed: false,
      createPaymentSuccess: false,
      createPaymentError: false,
      createPaymentErrorMessage: "",
    };
  },

  [createPaymentFailed]: (state) => {
    return {
      ...state,
      createPaymentInProgress: true,
      createPaymentFailed: true,
      createPaymentSuccess: false,
      createPaymentError: false,
      createPaymentErrorMessage: "",
    };
  },

  [createPaymentSuccess]: (state) => {
    return {
      ...state,
      createPaymentInProgress: true,
      createPaymentFailed: false,
      createPaymentSuccess: true,
      createPaymentError: false,
      createPaymentErrorMessage: "",
    };
  },

  [fetchPaymentOptionsInProgress]: (state) => {
    return {
      ...state,

      fetchPaymentOptionsInProgress: true,
      fetchPaymentOptionsFailed: false,
      fetchPaymentOptionsSuccess: false,
      fetchPaymentOptionsError: false,
      fetchPaymentOptionsErrorMessage: "",
    };
  },

  [fetchPaymentOptionsFailed]: (state) => {
    return {
      ...state,
      fetchPaymentOptionsInProgress: true,
      fetchPaymentOptionsFailed: true,
      fetchPaymentOptionsSuccess: false,
      fetchPaymentOptionsError: false,
      fetchPaymentOptionsErrorMessage: "",
    };
  },

  [fetchPaymentOptionsSuccess]: (state) => {
    return {
      ...state,
      fetchPaymentOptionsInProgress: true,
      fetchPaymentOptionsFailed: false,
      fetchPaymentOptionsSuccess: true,
      fetchPaymentOptionsError: false,
      fetchPaymentOptionsErrorMessage: "",
    };
  },
});

export { paymentReducer };
