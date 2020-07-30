import {
  loginInProgress,
  loginSuccess,
  loginFailed,
  birthYearEntered,
  changeGenderAction,
  selectIDTypeAction,
  finaliseIDTypeAction,
  changeDocumentValueAction,
  showCheckboxAction,
  checkCheckboxAction,
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
  finalisedDocument: "",
  selectedDocumentValue: "",
  showDeclaration: false,
  checkDeclaration: false,
  consumerIDTypes: [
    { idType: "Driving License", name: "dl" },
    { idType: "Passport", name: "passport" },
    { idType: "PAN Card", name: "pan" },
    { idType: "Voter ID", name: "voterid" },
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
  [changeDocumentValueAction]: (state, action) => ({
    ...state,
    selectedDocumentValue: action.payload,
  }),
  [selectIDTypeAction]: (state, action) => ({
    ...state,
    selectedDocument: action.payload,
  }),
  [finaliseIDTypeAction]: (state, action) => ({
    ...state,
    finalisedDocument: action.payload,
    selectedDocumentValue: "",
  }),
  [showCheckboxAction]: (state, action) => ({
    ...state,
    showDeclaration: action.payload,
  }),
  [checkCheckboxAction]: (state, action) => ({
    ...state,
    checkDeclaration: action.payload,
  }),
});

export { userInfoCreateReducer };
