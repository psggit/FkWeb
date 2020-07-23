import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../App/home";
import { tcReducer } from "../App/agreeAndContinue";
import { accordianReducer } from "../App/drinks";
import { userInfoCreateReducer } from "../App/userBasicInfo";
import { cartReducer } from "../App/common/cart";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: combineReducers({
    home: homeReducer,
    tcStore: tcReducer,
    addItem:accordianReducer,
    ubiStore: userInfoCreateReducer,
    cart: cartReducer,
  }),
  middleware: [thunk],
});

export default store;
