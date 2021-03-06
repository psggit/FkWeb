import {
  getPlacesDetailsAction,
  autoCompleteAction,
  autoCompleteFailAction,
  deliveryCheckAction,
  autoCompleteInProgressAction,
  //  getAddressFromGpsFailAction,
  //  getAddressFromGpsInProgressAction,
  storeMapGpsAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const apiStatusInitial = {
  autocompleteAPIStatus: "waiting",
};

const initialState = {
  isSearchMode: false,
  isCancelButton: true,
  isDeliverableCheck: "waiting",
  autoCompletePlaces: [],
  apiStatus: apiStatusInitial,
  placesInfo: {},
  selectedMapAddress: {},
  selectedGps: { lat: 13.006928, lng: 80.255516 },
};

const chooseLocationReducer = createReducer(initialState, {
  [autoCompleteAction]: (state, action) => ({
    ...state,
    autoCompletePlaces: action.payload,
    apiStatus: { ...apiStatusInitial, autocompleteAPIStatus: "waiting" },
  }),
  [autoCompleteFailAction]: (state) => ({
    ...state,
    apiStatus: { ...apiStatusInitial, autocompleteAPIStatus: "failed" },
  }),
  [autoCompleteInProgressAction]: (state) => ({
    ...state,
    apiStatus: { ...apiStatusInitial, autocompleteAPIStatus: "inProgress" },
  }),
  [deliveryCheckAction]: (state, action) => ({
    ...state,
    isDeliverableCheck: action.payload,
  }),
  [storeMapGpsAction]: (state, action) => ({
    ...state,
    selectedGps: action.payload,
  }),
  [getPlacesDetailsAction]: (state, action) => ({
    ...state,
    placesInfo: action.payload,
  }),
});

export { chooseLocationReducer };
