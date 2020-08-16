import {
  setPopupVisibility,
  fetchCriticalAdsSuccess,
  fetchCriticalAdsFailure,
  fetchCriticalAdsInProgress,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  hasViewed: false,
  criticalAdsFetchState: "inProgress",
};

const criticalAdsReducer = createReducer(initialState, {
  [setPopupVisibility]: (state) => ({ ...state, hasViewed: true}),
  [fetchCriticalAdsSuccess]: (state, action) => ({
    ...state,
    items: action.payload.ads,
    criticalAdsFetchState: "success",
  }),
  [fetchCriticalAdsFailure]: (state) => ({
    ...state,
    criticalAdsFetchState: "failed",
  }),
  [fetchCriticalAdsInProgress]: (state) => ({
    ...state,
    criticalAdsFetchState: "inProgress",
  }),
});

export { criticalAdsReducer };
