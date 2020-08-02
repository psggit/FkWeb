import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../App/home";
import { addressListReducer } from "../App/address";
import { tcReducer } from "../App/agreeAndContinue";
import { skuItemReducer} from "../App/common/brand";
import {searchDrinkReducer} from '../App/search'
import {searchByStoreReducer} from '../App/searchByStore'
import { userInfoCreateReducer } from "../App/userBasicInfo";
import { cartReducer } from "../App/common/cart";
import thunk from "redux-thunk";
import { storeFrontReducer } from "../App/storeFront";

const store = configureStore({
  reducer: combineReducers({
    home: homeReducer,
    tcStore: tcReducer,
    skuItem: skuItemReducer,
    searchByStore:searchByStoreReducer,
    storeFront:storeFrontReducer,
    searchItem:searchDrinkReducer,
    ubiStore: userInfoCreateReducer,
    addressStore: addressListReducer,
    cart: cartReducer,
  }),
  middleware: [thunk],
});

export default store;
