import { getHomeCarousel } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const carouselReducer = createReducer(
  { items: [] },
  {
    [getHomeCarousel]: (state, action) => ({
      ...state,
      items: action.payload.ads,
    }),
  }
);

export { carouselReducer };
