import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../App/home";
import { chooseLocationReducer } from "../App/address/chooseLocation";
import { addressListReducer } from "../App/address";
import { tcReducer } from "../App/agreeAndContinue";
import { accordianReducer } from "../App/drinks";
import { userInfoCreateReducer } from "../App/userBasicInfo";
import { cartReducer } from "../App/common/cart";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: combineReducers({
    home: homeReducer,
    tcStore: tcReducer,
    addItem: accordianReducer,
    ubiStore: userInfoCreateReducer,
    addressStore: addressListReducer,
    cart: cartReducer,
    chooseLocation: chooseLocationReducer,
  }),
  middleware: [thunk],
});

export default store;
