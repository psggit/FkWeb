import { combineReducers } from "redux";
import { retailerListReducer } from "./retailerList";
import { carouselReducer } from "./carousel";

const homeReducer = combineReducers({
  retailerList: retailerListReducer,
  carousel: carouselReducer,
});

export { homeReducer };
