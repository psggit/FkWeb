import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../App/home";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: combineReducers({
    home: homeReducer,
  }),
  middleware: [thunk],
});

export default store;
