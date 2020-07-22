import {
  birthYearEntered,
  changeGenderAction,
  selectIDTypeAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
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
