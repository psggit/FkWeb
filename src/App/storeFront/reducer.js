import { combineReducers } from "redux";
import { genersReducer, brandGenerReducer } from "./duck";

const storeFrontReducer = combineReducers({
    generItems: genersReducer,
    brandItems: brandGenerReducer
});

export {storeFrontReducer} ;
