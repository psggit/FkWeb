import {
  fetchStateInProgress,
  fetchStateFailed,
  fetchStateSuccess,
  fetchCityInProgress,
  fetchCityFailed,
  fetchCitySuccess,
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
  cities: [{id:1}],
};

const stateCityReducer = createReducer(initialState, {
  [fetchStateInProgress]: (state) => ({
    ...state,
    fetchStateInProgress: true,
    fetchStateFailed: false,
    fetchStateSuccess: false,
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
