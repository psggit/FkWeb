import {
  getHomeCarouselInProgress,
  getHomeCarouselSuccess,
  getHomeCarouselFailure,
  resetOnUnmount,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  getHomeCarouselInProgress: false,
  getHomeCarouselSuccess: false,
  getHomeCarouselFailure: false,
  items: [],
};

const carouselReducer = createReducer(initialState, {
  [getHomeCarouselInProgress]: (state) => ({
    ...state,
    getHomeCarouselInProgress: true,
    getHomeCarouselSuccess: false,
    getHomeCarouselFailure: false,
  }),
  [getHomeCarouselSuccess]: (state, action) => ({
    ...state,
    getHomeCarouselInProgress: false,
    getHomeCarouselSuccess: true,
    getHomeCarouselFailure: false,
    items: action.payload.ads,
  }),
  [getHomeCarouselFailure]: (state) => ({
    ...state,
    getHomeCarouselInProgress: false,
    getHomeCarouselSuccess: false,
    getHomeCarouselFailure: true,
  }),
  [resetOnUnmount]: () => initialState,
});

export { carouselReducer };
