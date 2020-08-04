import { createAction } from "@reduxjs/toolkit";

const getHomeCarouselInProgress = createAction("getHomeCarouselInProgress");
const getHomeCarouselSuccess = createAction("getHomeCarouselSuccess");
const getHomeCarouselFailure = createAction("getHomeCarouselFailure");

export {
  getHomeCarouselInProgress,
  getHomeCarouselSuccess,
  getHomeCarouselFailure,
};
