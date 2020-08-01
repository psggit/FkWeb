import {
  getPlacesDetailsAction,
  autoCompleteAction,
  updateAddressFromGpsAction,
  getAddressFromGpsFailAction,
  getAddressFromGpsInProgressAction,
  storeMapGpsAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isSearchMode: false,
  isCancelButton: true,
  autoCompletePlaces: [],
  placesInfo: {},
  selectedMapAddress: {},
  selectedGps: {lat: 13.006928, lng: 80.255516},
};

const chooseLocationReducer = createReducer(initialState, {
  [autoCompleteAction]: (state, action) => ({
    ...state,
    autoCompletePlaces: action.payload,
  }),
  [storeMapGpsAction]: (state, action) => ({
    ...state,
    selectedGps: action.payload,
  }),
  [updateAddressFromGpsAction]: (state, action) => ({
    ...state,
    selectedMapAddress: action.payload,
  }),
  [getPlacesDetailsAction]: (state, action) => ({
    ...state,
    placesInfo: action.payload,
  }),
});

export { chooseLocationReducer };
