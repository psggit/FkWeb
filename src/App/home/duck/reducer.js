import {
  getCurrentOrderInProgress,
  getCurrentOrderSuccess,
  getCurrentOrderFailed,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  getCurrentOrderInProgress: false,
  getCurrentOrderSuccess: false,
  getCurrentOrderFailed: false,
  order: null,
};

const currentOrderReducer = createReducer(initialState, {
  [getCurrentOrderInProgress]: (state) => ({
    ...state,
    getCurrentOrderInProgress: true,
    getCurrentOrderSuccess: false,
    getCurrentOrderFailed: false,
  }),
  [getCurrentOrderSuccess]: (state, data) => ({
    ...state,
    getCurrentOrderInProgress: false,
    getCurrentOrderSuccess: true,
    getCurrentOrderFailed: false,
    order: data.payload,
  }),
  [getCurrentOrderFailed]: (state) => ({
    ...state,
    getCurrentOrderInProgress: false,
    getCurrentOrderSuccess: false,
    getCurrentOrderFailed: true,
  }),
});

export { currentOrderReducer };
