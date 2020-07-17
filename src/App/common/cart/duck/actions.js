import { createAction } from "@reduxjs/toolkit";

//event for adding an sku to cart
export const addSKUToCart = createAction("addSKUToCart");

//event for removing an sku from cart
export const reremoveSKUFromCart = createAction("removeSKUFromCart");
