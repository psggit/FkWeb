import { getOrderDetailInProgress } from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  order: null,
};

const orderPlacedReducer = createReducer(initialState, {
  [getOrderDetailInProgress]: (state) => ({
    ...state,
  }),
});

export { orderPlacedReducer };
