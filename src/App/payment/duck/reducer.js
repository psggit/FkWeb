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
  verifyPaymentInProgress,
  verifyPaymentSuccess,
  verifyPaymentFailed,
  verifyPaymentError,
  placeOrderInProgress,
  placeOrderSuccess,
  placeOrderFailed,
  placeOrderError,
  takeMeHome,
  tryPayingAgain,
  resetPaymentOnUnmount,
  resetVerifyPaymentOnUnmount,
  addNewCard,
  cancelAddNewCard,
  savedCardValid,
  newCardNumberValid,
  newCardNameValid,
  newCardExpiryValid,
  newCardCvvValid,
} from "./actions";

const paymentFailureMessage =
  "If the amount has been debited, will be credited back in 4-7 business days";
const placeOrderFailureMessage = "Place order failed";

let initialState = {
  initialTrigger: true,
  //Payment Options store
  paymentOptionsDetails: {},
  fetchPaymentOptionsInProgress: false,
  fetchPaymentOptionsFailed: false,
  fetchPaymentOptionsSuccess: false,
  fetchPaymentOptionsError: false,
  fetchPaymentOptionsErrorMessage: "",

  //Payment store
  paymentDetails: {},
  createPaymentInProgress: false,
  createPaymentFailed: false,
  createPaymentSuccess: false,
  createPaymentError: false,
  createPaymentErrorMessage: "",

  //Order store
  orderDetails: {},
  createOrderInProgress: false,
  createOrderSuccess: false,
  createOrderFailed: false,
  createOrderError: false,
  createOrderErrorMessage: "",

  //verify payments
  verifyPaymentDetails: {},
  verifyPaymentInProgress: false,
  verifyPaymentSuccess: false,
  verifyPaymentFailed: false,
  verifyPaymentError: false,
  verifyPaymentErrorMessage: paymentFailureMessage,
  paymentRetryCount: 0,

  //place order
  placeOrderDetails: {},
  placeOrderInProgress: false,
  placeOrderFailed: false,
  placeOrderSuccess: false,
  placeOrderError: false,
  placeOrderErrorMessage: placeOrderFailureMessage,
  placeOrderRetryCount: 0,

  takeMeHome: false,
  tryPayingAgain: false,

  //payment control flow
  addNewCard: false,
  savedCardValid: {},

  newCardNumberValid: true,
  newCardNameValid: true,
  newCardExpiryValid: true,
  newCardCvvValid: true,
};

const paymentSuccessHandler = (state, data) => {
  if (data.status === "success") {
    return {
      ...state,
      verifyPaymentInProgress: false,
      verifyPaymentSuccess: true,
      verifyPaymentFailed: false,
      verifyPaymentError: false,
      verifyPaymentDetails: data,
      paymentRetryCount: state.paymentRetryCount + 1,
    };
  }
  return {
    ...state,
    verifyPaymentInProgress: false,
    verifyPaymentSuccess: false,
    verifyPaymentFailed: false,
    verifyPaymentError: false,
    verifyPaymentDetails: data,
    paymentRetryCount: state.paymentRetryCount + 1,
  };
};

const placeOrderSuccessHandler = (state, data) => {
  if (data.status === "success") {
    return {
      ...state,
      placeOrderInProgress: false,
      placeOrderSuccess: true,
      placeOrderFailed: false,
      placeOrderError: false,
      placeOrderDetails: data,
      placeOrderRetryCount: state.placeOrderRetryCount + 1,
    };
  }
  return {
    ...state,
    placeOrderInProgress: false,
    placeOrderSuccess: false,
    placeOrderFailed: false,
    placeOrderError: false,
    placeOrderDetails: data,
    placeOrderRetryCount: state.placeOrderRetryCount + 1,
  };
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

  [verifyPaymentInProgress]: (state) => {
    return {
      ...state,
      verifyPaymentInProgress: true,
      verifyPaymentFailed: false,
      verifyPaymentSuccess: false,
    };
  },
  [verifyPaymentSuccess]: (state, e) => {
    return paymentSuccessHandler(state, e.payload);
  },

  [verifyPaymentFailed]: (state) => {
    return {
      ...state,
      verifyPaymentInProgress: false,
      verifyPaymentSuccess: false,
      verifyPaymentFailed: false,
      paymentRetryCount: state.paymentRetryCount + 1,
    };
  },

  [verifyPaymentError]: (state) => {
    return {
      ...state,
      verifyPaymentInProgress: false,
      verifyPaymentSuccess: false,
      verifyPaymentFailed: false,
      verifyPaymentError: true,
    };
  },

  [placeOrderInProgress]: (state) => {
    return {
      ...state,
      placeOrderInProgress: true,
      placeOrderFailed: false,
      placeOrderSuccess: false,
      placeOrderError: false,
    };
  },
  [placeOrderSuccess]: (state, e) => {
    return placeOrderSuccessHandler(state, e.payload);
  },

  [placeOrderFailed]: (state) => {
    return {
      ...state,
      placeOrderInProgress: false,
      placeOrderSuccess: false,
      placeOrderFailed: false,
      placeOrderError: false,
      placeOrderRetryCount: state.placeOrderRetryCount + 1,
    };
  },

  [placeOrderError]: (state) => {
    return {
      ...state,
      placeOrderInProgress: false,
      placeOrderSuccess: false,
      placeOrderFailed: false,
      placeOrderError: true,
    };
  },

  [takeMeHome]: (state) => {
    return {
      ...state,
      takeMeHome: true,
    };
  },

  [tryPayingAgain]: (state) => {
    return {
      ...state,
      tryPayingAgain: true,
    };
  },

  [resetPaymentOnUnmount]: (state) => {
    return {
      ...state,
      initialTrigger: true,
      //Payment Options store
      fetchPaymentOptionsInProgress: false,
      fetchPaymentOptionsFailed: false,
      fetchPaymentOptionsSuccess: false,
      fetchPaymentOptionsError: false,
      fetchPaymentOptionsErrorMessage: "",

      //Payment store
      createPaymentInProgress: false,
      createPaymentFailed: false,
      createPaymentSuccess: false,
      createPaymentError: false,
      createPaymentErrorMessage: "",

      //Order store
      createOrderInProgress: false,
      createOrderSuccess: false,
      createOrderFailed: false,
      createOrderError: false,
      createOrderErrorMessage: "",

      //verify payments
      verifyPaymentInProgress: false,
      verifyPaymentSuccess: false,
      verifyPaymentFailed: false,
      verifyPaymentError: false,
      verifyPaymentErrorMessage: paymentFailureMessage,

      addNewCard: false,
    };
  },

  [resetVerifyPaymentOnUnmount]: (state) => {
    return {
      ...state,
      verifyPaymentInProgress: false,
      verifyPaymentSuccess: false,
      verifyPaymentFailed: false,
      verifyPaymentError: false,
      verifyPaymentErrorMessage: paymentFailureMessage,
      paymentRetryCount: 0,

      placeOrderInProgress: false,
      placeOrderFailed: false,
      placeOrderSuccess: false,
      placeOrderError: false,
      placeOrderErrorMessage: placeOrderFailureMessage,
      placeOrderRetryCount: 0,

      takeMeHome: false,
      tryPayingAgain: false,

      //payment control flow
      addNewCard: false,
      savedCardValid: {},

      newCardNumberValid: true,
      newCardNameValid: true,
      newCardExpiryValid: true,
      newCardCvvValid: true,
    };
  },
  [addNewCard]: (state) => ({ ...state, addNewCard: true }),
  [cancelAddNewCard]: (state) => ({ ...state, addNewCard: false }),
  [savedCardValid]: (state, e) => ({ ...state, savedCardValid: e.payload }),

  [newCardNumberValid]: (state, e) => ({
    ...state,
    newCardNumberValid: e.payload,
  }),
  [newCardNameValid]: (state, e) => ({ ...state, newCardNameValid: e.payload }),
  [newCardExpiryValid]: (state, e) => ({
    ...state,
    newCardExpiryValid: e.payload,
  }),
  [newCardCvvValid]: (state, e) => ({ ...state, newCardCvvValid: e.payload }),
});

export { paymentReducer };
