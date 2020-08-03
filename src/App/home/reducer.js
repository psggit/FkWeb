import { combineReducers } from "redux";
import { retailerListReducer } from "./retailerList";
import { carouselReducer } from "./carousel";
import { criticalAdsReducer } from './criticalAds';
import { currentOrderReducer } from "./duck";

const homeReducer = combineReducers({
  retailerList: retailerListReducer,
  carousel: carouselReducer,
  criticalads: criticalAdsReducer,
  currentOrder: currentOrderReducer,
});

export { homeReducer };
