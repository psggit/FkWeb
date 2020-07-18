import {
  loginInProgress,
  loginSuccess,
  loginFailed,
  birthYearEntered,
  changeGenderAction,
  selectIDTypeAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loginInProgress: false,
  loginSuccess: false,
  loginFailed: false,
  collectUserDetails: false,
  birthYear: "",
  gender: "",
  selectedDocument: "",
  selectedDocumentValue: "",
  consumerIDTypes: [
    { idType: "Driving License", format: "text" },
    { idType: "Passport", format: "text" },
    { idType: "PAN Card", format: "text" },
    { idType: "Voter ID", format: "text" },
  ],
};

const userInfoCreateReducer = createReducer(initialState, {
  [loginInProgress]: (state) => ({
    ...state,
    loginInProgress: true,
    loginSuccess: false,
    loginFailed: false,
  }),
  [loginSuccess]: (state, data) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: true,
    loginFailed: false,
    collectUserDetails: !(
      data.bz_kyc_exist &&
      data.yob_exist &&
      data.gender_exist
    ),
  }),
  [loginFailed]: (state) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: false,
    loginFailed: true,
  }),
  [birthYearEntered]: (state, action) => ({
    ...state,
    birthYear: action.payload,
  }),
  [changeGenderAction]: (state, action) => ({
    ...state,
    gender: action.payload,
  }),
  [selectIDTypeAction]: (state, action) => ({
    ...state,
    selectedDocument: action.payload,
    selectedDocumentValue: "",
  }),
});

export { userInfoCreateReducer };
