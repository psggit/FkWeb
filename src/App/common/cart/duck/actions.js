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
