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
  initialTrigger,
} from "./actions";

let initialState = {
  initialTrigger: true,
  //Payment Options store
  paymentOptionsDetails: {},
  fetchPaymentOptionsInProgress: false,
  fetchPaymentOptionsFailed: false,
  fetchPaymentOptionsSuccess: false,
  fetchPaymentOptionsError: false,
  fetchPaymentOptionsErrorMessage: false,

  //Payment store
  paymentDetails: {},
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
      createOrderInProgress: false,
      createOrderFailed: true,
      createOrderSuccess: false,
      createOrderError: false,
      createOrderErrorMessage: "",
    };
  },

  [createOrderSuccess]: (state, e) => {
    return {
      ...state,
      createOrderInProgress: false,
      createOrderFailed: false,
      createOrderSuccess: true,
      createOrderError: false,
      createOrderErrorMessage: "",
      orderDetails: e.payload,
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
      createPaymentInProgress: false,
      createPaymentFailed: true,
      createPaymentSuccess: false,
      createPaymentError: false,
      createPaymentErrorMessage: "",
    };
  },

  [createPaymentSuccess]: (state, e) => {
    return {
      ...state,
      createPaymentInProgress: false,
      createPaymentFailed: false,
      createPaymentSuccess: true,
      createPaymentError: false,
      createPaymentErrorMessage: "",
      paymentDetails: e.payload,
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
      fetchPaymentOptionsInProgress: false,
      fetchPaymentOptionsFailed: true,
      fetchPaymentOptionsSuccess: false,
      fetchPaymentOptionsError: false,
      fetchPaymentOptionsErrorMessage: "",
    };
  },

  [fetchPaymentOptionsSuccess]: (state, e) => {
    return {
      ...state,
      fetchPaymentOptionsInProgress: false,
      fetchPaymentOptionsFailed: false,
      fetchPaymentOptionsSuccess: true,
      fetchPaymentOptionsError: false,
      fetchPaymentOptionsErrorMessage: "",
      paymentOptionsDetails: e.payload,
    };
  },
  [initialTrigger]: (state) => {
    return {
      ...state,
      initialTrigger: false,
    };
  },
});

export { paymentReducer };
