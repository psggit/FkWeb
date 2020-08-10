import {
  setPopupVisibility,
  fetchCriticalAdsSuccess,
  fetchCriticalAdsFailure,
  fetchCriticalAdsInProgress,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isViewed: true,
  criticalAdsFetchState: "inProgress",
};

const criticalAdsReducer = createReducer(initialState, {
  [setPopupVisibility]: (state) => ({ ...state, isViewed: false }),
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
