import {
  tcAgreed,
  loginInProgress,
  loginSuccess,
  loginFailed,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  showTC: true,
  loginInProgress: false,
  loginSuccess: false,
  loginFailed: false,
};

const tcReducer = createReducer(initialState, {
  [tcAgreed]: (state) => ({
    ...state,
    showTC: false,
  }),
  [loginInProgress]: (state) => ({
    ...state,
    loginInProgress: true,
    loginSuccess: false,
    loginFailed: false,
  }),
  [loginSuccess]: (state) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: true,
    loginFailed: false,
  }),
  [loginFailed]: (state) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: false,
    loginFailed: true,
  }),
});

export { tcReducer };
