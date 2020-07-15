import { tcAgreed, loginInProgress, loginSuccess } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  showTC: true,
  loginInProgress: false,
  loginSuccess: false,
};

const tcReducer = createReducer(initialState, {
  [tcAgreed]: (state) => ({
    ...state,
    showTC: false,
  }),
  [loginInProgress]: (state) => ({
    ...state,
    loginInProgress: true,
  }),
  [loginSuccess]: (state) => ({
    ...state,
    loginSuccess: true,
  }),
});

export { tcReducer };
