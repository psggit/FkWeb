import {
  fetchStateInProgress,
  fetchStateFailed,
  fetchStateSuccess,
  fetchCityInProgress,
  fetchCityFailed,
  fetchCitySuccess,
  selectState,
  selectCity,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  fetchStateInProgress: false,
  fetchStateFailed: false,
  fetchStateSuccess: false,
  fetchCityInProgress: false,
  fetchCityFailed: false,
  fetchCitySuccess: false,
  states: [],
  selectedState: null,
  selectedCity: null,
  cities: [],
};

const stateCityReducer = createReducer(initialState, {
  [fetchStateInProgress]: (state) => ({
    ...state,
    fetchStateInProgress: true,
    fetchStateFailed: false,
    fetchStateSuccess: false,
  }),
  [selectState]: (state, action) => ({
    ...state,
    selectedState: action.payload,
  }),
  [selectCity]: (state, action) => ({
    ...state,
    selectedCity: action.payload,
  }),
  [fetchStateSuccess]: (state, action) => ({
    ...state,
    fetchStateInProgress: false,
    fetchStateFailed: false,
    fetchStateSuccess: true,
    states: action.payload,
  }),
  [fetchStateFailed]: (state) => ({
    ...state,
    fetchStateInProgress: false,
    fetchStateFailed: true,
    fetchStateSuccess: false,
  }),
  [fetchCityInProgress]: (state) => ({
    ...state,
    fetchCityInProgress: true,
    fetchCityFailed: false,
    fetchCitySuccess: false,
  }),
  [fetchCitySuccess]: (state, action) => ({
    ...state,
    fetchCityInProgress: false,
    fetchCityFailed: false,
    fetchCitySuccess: true,
    cities: action.payload,
  }),
  [fetchCityFailed]: (state) => ({
    ...state,
    fetchCityInProgress: false,
    fetchCityFailed: true,
    fetchCitySuccess: false,
  }),
});

export { stateCityReducer };
