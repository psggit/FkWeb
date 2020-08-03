import { combineReducers } from "redux";
import { retailerListReducer } from "./retailerList";
import { carouselReducer } from "./carousel";
import { currentOrderReducer } from "./duck";

const homeReducer = combineReducers({
  retailerList: retailerListReducer,
  carousel: carouselReducer,
  currentOrder: currentOrderReducer,
});

export { homeReducer };
