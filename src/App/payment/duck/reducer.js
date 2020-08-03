import { createReducer } from "@reduxjs/toolkit";
import {
  createOrderInProgress,
  createOrderFailed,
  createOrderSuccess,
  createPaymentInProgress,
  createPaymentFailed,
  createPaymentSuccess,
} from "./actions";

let initialState = {
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
});

export { paymentReducer };
