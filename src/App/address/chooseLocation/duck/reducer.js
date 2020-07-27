import {
  getPlacesDetailsAction,
  getAddressFromGpsAction,
  autoCompleteAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isSearchMode: false,
  isCancelButton: false,
  autoCompletePlaces: [],
  placesInfo: {},
  address: {},
};

const addressFromGpsReducer = createReducer(initialState, {
  [getAddressFromGpsAction]: (state, action) => ({
    ...state,
    addressFromGps: action.payload,
  }),
});

const autoCompleteReducer = createReducer(initialState, {
  [autoCompleteAction]: (state, action) => ({
    ...state,
    autoCompletePlaces: action.payload,
  }),
});

const placeDetailsReducer = createReducer(initialState, {
  [getPlacesDetailsAction]: (state, action) => ({
    ...state,
    placeDetails: action.payload,
  }),
});

export { placeDetailsReducer, addressFromGpsReducer, autoCompleteReducer };
