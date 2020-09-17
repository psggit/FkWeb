import {
  loginInProgress,
  loginSuccess,
  loginFailed,
  guessAddressInProgress,
  guessAddressSuccess,
  guessAddressFailed,
  fetchGrantTokenFailed,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    loginInProgress: false,
    loginSuccess: false,
    loginFailed: false,
    guessAddressInProgress: false,
    guessAddressSuccess: false,
    guessAdddressFailed: false,
    guessAddressInfo: {},
    grantTokenError: false,
    grantTokenErrorMessage: "",
    deviceGps: null,
    showError: false,
    errorMessage: "",
    userInfo: {},
    userID: 0,
  };
};

const loginReducer = createReducer(initialState(), {
  [fetchGrantTokenFailed]: (state, e) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: false,
    loginFailed: false,
    grantTokenError: true,
    grantTokenErrorMessage: e.payload,
  }),
  [guessAddressInProgress]: (state) => ({
    ...state,
    guessAddressInProgress: true,
    guessAddressSuccess: false,
    guessAddressFailed: false,
  }),
  [guessAddressSuccess]: (state, action) => ({
    ...state,
    guessAddressInProgress: false,
    guessAddressSuccess: true,
    guessAddressFailed: false,
    guessAddressInfo: action.payload,
  }),
  [guessAddressFailed]: (state) => ({
    ...state,
    guessAddressInProgress: false,
    guessAddressSuccess: false,
    guessAddressFailed: true,
  }),
  [loginInProgress]: (state) => ({
    ...state,
    loginInProgress: true,
    loginSuccess: false,
    loginFailed: false,
    grantTokenError: false,
    grantTokenErrorMessage: "",
  }),
  [loginSuccess]: (state, action) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: true,
    loginFailed: false,
    userID: action.payload.data.auth_user.user_id,
    userInfo: action.payload.data,
    deviceGps: null,
  }),
  [loginFailed]: (state) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: false,
    loginFailed: true,
  }),
});

export { loginReducer };
