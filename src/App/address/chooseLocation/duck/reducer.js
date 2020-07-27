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
  mapCenterGps: "",
};

const chooseLocationReducer = createReducer(initialState, {
  [getAddressFromGpsAction]: (state, action) => ({
    ...state,
    address: action.payload,
  }),
  [autoCompleteAction]: (state, action) => ({
    ...state,
    autoCompletePlaces: action.payload,
  }),
  [getPlacesDetailsAction]: (state, action) => ({
    ...state,
    placesInfo: action.payload,
  }),
});

export { chooseLocationReducer };
