import { combineReducers } from "redux";
import { retailerListReducer } from "./retailerList";
import { carouselReducer } from "./carousel";
import { criticalAdsReducer } from './criticalAds';

const homeReducer = combineReducers({
  retailerList: retailerListReducer,
  carousel: carouselReducer,
  criticalads: criticalAdsReducer
});

export { homeReducer };
