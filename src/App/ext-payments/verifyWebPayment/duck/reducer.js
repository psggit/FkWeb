import { createReducer } from "@reduxjs/toolkit";
import {
  verifyPaymentFailure,
  verifyPaymentProgress,
  verifyPaymentSuccess,
} from "./actions";

const initialState = {
  verifyPaymentProgress: false,
  verifyPaymentFailure: false,
  verifyPaymentSuccess: false,
  message: "",
  status: null,
};

const verifyPaymentReducer = createReducer(initialState, {
  [verifyPaymentProgress]: () => ({
    verifyPaymentProgress: true,
    verifyPaymentFailure: false,
    verifyPaymentSuccess: false,
    status: null,
  }),
  [verifyPaymentFailure]: (state, action) => ({
    verifyPaymentProgress: false,
    verifyPaymentFailure: true,
    verifyPaymentSuccess: false,
    message: action.payload,
    status: "failed",
  }),
  [verifyPaymentSuccess]: (state, action) => ({
    verifyPaymentProgress: false,
    verifyPaymentFailure: false,
    verifyPaymentSuccess: true,
    message: action.payload,
    status: "success",
  }),
});

export { verifyPaymentReducer };
