import { createAction } from "@reduxjs/toolkit";

// UI
const setPopupVisibility = createAction("setPopupVisibility");
// API status
const fetchCriticalAdsSuccess = createAction("fetchCriticalAdsSuccess");
const fetchCriticalAdsFailure = createAction("fetchCriticalAdsFailure");
const fetchCriticalAdsInProgress = createAction("fetchCriticalAdsInProgress");

export {
    setPopupVisibility,
    fetchCriticalAdsSuccess,
    fetchCriticalAdsFailure,
    fetchCriticalAdsInProgress
};