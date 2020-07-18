import { createAction } from "@reduxjs/toolkit";

//event for adding an sku to cart
export const addSkuToCart = createAction("addSKUToCart");

//event for removing an sku from cart
export const removeSkuFromCart = createAction("removeSKUFromCart");

//validate in progress
export const validateInProgress = createAction("validateInProgress");

// successful validation
export const validateSuccessful = createAction("validateSuccessful");

// validation failed, need to retry
export const validationFailure = createAction("validationFailure");
