import {
  loginInProgress,
  loginSuccess,
  loginFailed,
  birthYearEntered,
  changeGenderAction,
  selectIDTypeAction,
  finaliseIDTypeAction,
  kycUpdate,
  kycUpdateFailed,
  errorClose,
  changeDocumentValueAction,
  showCheckboxAction,
  checkCheckboxAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    loginInProgress: false,
    loginSuccess: false,
    loginFailed: false,
    collectUserDetails: false,
    userInfo: {},
    birthYear: "",
    gender: "",
    selectedDocument: {},
    finalisedDocument: {},
    selectedDocumentValue: "",
    showDeclaration: false,
    checkDeclaration: false,
    showError: false,
    errorMessage: "",
    consumerIDTypes: [
      { idType: "Driving License", name: "dl" },
      { idType: "Passport", name: "passport" },
      { idType: "PAN Card", name: "pan" },
      { idType: "Voter ID", name: "voterid" },
    ],
  };
};

const userInfoCreateReducer = createReducer(initialState(), {
  [loginInProgress]: (state) => ({
    ...state,
    loginInProgress: true,
    loginSuccess: false,
    loginFailed: false,
  }),
  [loginSuccess]: (state, action) => ({
    ...state,
    loginInProgress: false,
    loginSuccess: true,
    loginFailed: false,
    userID: action.payload.data.auth_user.user_id,
    userInfo: action.payload.data,
    collectUserDetails: !(
      action.payload.data.bz_kyc_exist &&
      action.payload.data.dob_exist &&
      action.payload.data.gender_exist
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
  [kycUpdateFailed]: (state, action) => ({
    ...state,
    showError: true,
    errorMessage: action.payload,
  }),
  [errorClose]: (state) => ({
    ...state,
    showError: false,
    errorMessage: "",
  }),
  [kycUpdate]: (state) => ({
    ...state,
    collectUserDetails: false,
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
