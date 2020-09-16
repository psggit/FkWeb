import {
  loginInProgress,
  loginSuccess,
  loginFailed,
  fetchGrantTokenFailed,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    loginInProgress: false,
    loginSuccess: false,
    loginFailed: false,
    grantTokenError: false,
    grantTokenErrorMessage: "",
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
  }),
  [loginFailed]: (state) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: false,
    loginFailed: true,
  }),
});

export { loginReducer };
