import {
  nameEntered,
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
  resetOnUnmount,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = () => {
  return {
    userInfo: {},
    name: "",
    birthYear: "",
    gender: "",
    selectedDocument: {},
    finalisedDocument: {},
    selectedDocumentValue: "",
    showDeclaration: false,
    checkDeclaration: false,
    showError: false,
    errorMessage: "",
    collectedUserDetails: false,
    consumerIDTypes: [
      { idType: "Driving License", name: "dl" },
      { idType: "Passport", name: "passport" },
      { idType: "PAN Card", name: "pan" },
      { idType: "Voter ID", name: "voterid" },
      { idType: "Aadhaar", name: "aadhaar" },
    ],
  };
};

const userInfoCreateReducer = createReducer(initialState(), {
  [nameEntered]: (state, action) => ({
    ...state,
    name: action.payload,
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
    collectedUserDetails: true,
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
  [resetOnUnmount]: (state) => ({
    ...state,
    userInfo: {},
    name: "",
    birthYear: "",
    gender: "",
    selectedDocument: {},
    finalisedDocument: {},
    selectedDocumentValue: "",
    showDeclaration: false,
    checkDeclaration: false,
    showError: false,
    errorMessage: "",
    collectedUserDetails: false,
    consumerIDTypes: [
      { idType: "Driving License", name: "dl" },
      { idType: "Passport", name: "passport" },
      { idType: "PAN Card", name: "pan" },
      { idType: "Voter ID", name: "voterid" },
      { idType: "Aadhaar", name: "aadhaar" },
    ],
  }),
});

export { userInfoCreateReducer };
