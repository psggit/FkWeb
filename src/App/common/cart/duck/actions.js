import { createAction } from "@reduxjs/toolkit";

//event for adding an sku to cart
export const addSkuToCart = createAction("addSKUToCart");

//event for removing an sku from cart
export const removeSkuFromCart = createAction("removeSKUFromCart");

//validation in progress
export const validationInProgress = createAction("validationInProgress");

// successful validation
export const validationSuccessful = createAction("validationSuccessful");

// validation failed, need to retry
export const validationFailure = createAction("validationFailure");

// validateErrorOk
export const closeSummaryAlert = createAction("closeSummaryAlert");

export const clearCartAndAdd = createAction("clearCartAndAdd");

export const dontClearCart = createAction("dontClearCart");

export const resetOnUnmount = createAction("resetOnUnmount");

//useful when an order is placed successfully
export const clearCart = createAction("cartClear");

export const fetchSummaryInProgress = createAction("fetchSummaryInProgress");

export const fetchSummaryFailed = createAction("fetchSummaryFailed");

export const fetchSummarySuccess = createAction("fetchSummarySuccess");
