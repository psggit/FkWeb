import { createAction } from "@reduxjs/toolkit";

const fetchStateInProgress = createAction("fetchStateInProgress");
const fetchStateFailed = createAction("fetchStateFailed");
const fetchStateSuccess = createAction("fetchStateSuccess");
const fetchCityInProgress = createAction("fetchCityInProgress");
const fetchCityFailed = createAction("fetchCityFailed");
const fetchCitySuccess = createAction("fetchCitySuccess");
const selectCity = createAction("selectCity");
const selectState = createAction("selectState");

export {
  fetchStateInProgress,
  fetchStateFailed,
  fetchStateSuccess,
  fetchCityInProgress,
  fetchCityFailed,
  fetchCitySuccess,
  selectState,
  selectCity,
};
