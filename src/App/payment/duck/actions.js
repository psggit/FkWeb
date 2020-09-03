import { createAction } from "@reduxjs/toolkit";

export const createOrderInProgress = createAction("createOrderInProgress");
export const createOrderFailed = createAction("createOrderFailed");
export const createOrderSuccess = createAction("createOrderSuccess");

export const fetchPaymentOptionsInProgress = createAction(
  "fetchPaymentOptionsInProgress"
);
export const fetchPaymentOptionsFailed = createAction(
  "fetchPaymentOptionsFailed"
);
export const fetchPaymentOptionsSuccess = createAction(
  "fetchPaymentOptionsSuccess"
);

export const createUPIPaymentInProgress = createAction(
  "createUPIPaymentInProgress"
);
export const createUPIPaymentFailed = createAction("createUPIPaymentFailed");
export const createUPIPaymentSuccess = createAction("createUPIPaymentSuccess");

export const createCollectRequestInProgress = createAction(
  "createCollectRequestInProgress"
);
export const createCollectRequestFailed = createAction(
  "createCollectRequestFailed"
);
export const createCollectRequestSuccess = createAction(
  "createCollectRequestSuccess"
);

export const resetUPI = createAction("resetUPI");

export const createPaymentInProgress = createAction("createPaymentInProgress");
export const createPaymentFailed = createAction("createPaymentFailed");
export const createPaymentSuccess = createAction("createPaymentSuccess");

export const initialTrigger = createAction("initialTrigger");

export const verifyPaymentInProgress = createAction("verifyPaymentInProgress");
export const verifyPaymentSuccess = createAction("verifyPaymentSuccess");
export const verifyPaymentFailed = createAction("verifyPaymentFailed");
export const verifyPaymentError = createAction("verifyPaymentError");

export const placeOrderInProgress = createAction("placeOrderInProgress");
export const placeOrderSuccess = createAction("placeOrderSuccess");
export const placeOrderFailed = createAction("placeOrderFailed");
export const placeOrderError = createAction("placeOrderError");

export const takeMeHome = createAction("takeMeHome");
export const tryPayingAgain = createAction("tryPayingAgain");

export const resetPaymentOnUnmount = createAction("resetPaymentOnUnmount");
export const resetVerifyPaymentOnUnmount = createAction(
  "resetVerifyPaymentOnUnmount"
);

export const addNewCard = createAction("addNewCard");
export const cancelAddNewCard = createAction("cancelAddNewCard");

export const savedCardValid = createAction("savedCardValid");

export const newCardNumberValid = createAction("newCardNumberValid");
export const newCardNameValid = createAction("newCardNameValid");
export const newCardExpiryValid = createAction("newCardExpiryValid");
export const newCardCvvValid = createAction("newCardCvvValid");
