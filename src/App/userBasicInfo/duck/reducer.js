import {
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
  birthYear: "",
  gender: "",
  selectedDocument: "",
  finalisedDocument: "",
  selectedDocumentValue: "",
  showDeclaration: false,
  checkDeclaration:false,
  consumerIDTypes: [
    { idType: "Driving License", format: "text" },
    { idType: "Passport", format: "text" },
    { idType: "PAN Card", format: "text" },
    { idType: "Voter ID", format: "text" },
  ],
};

const userInfoCreateReducer = createReducer(initialState, {
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
