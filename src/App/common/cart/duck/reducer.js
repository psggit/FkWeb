import { addSkuToCart, removeSkuFromCart } from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const cartReducer = createReducer(initialState, {
  [addSkuToCart]: (state) => ({ ...state }),
  [removeSkuFromCart]: (state) => ({ ...state }),
});
