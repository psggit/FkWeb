import { createAction } from "@reduxjs/toolkit";

const getHomeCarouselInProgress = createAction("getHomeCarouselInProgress");
const getHomeCarouselSuccess = createAction("getHomeCarouselSuccess");
const getHomeCarouselFailure = createAction("getHomeCarouselFailure");
const resetOnUnmount = createAction("resetOnUnmount");

export {
  getHomeCarouselInProgress,
  getHomeCarouselSuccess,
  getHomeCarouselFailure,
  resetOnUnmount,
};
