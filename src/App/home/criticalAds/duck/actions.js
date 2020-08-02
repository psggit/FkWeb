import { createAction } from "@reduxjs/toolkit";

const getCriticalAds = createAction("getCriticalAds");
const setPopupVisibility = createAction("setPopupVisibility");

export { getCriticalAds, setPopupVisibility };