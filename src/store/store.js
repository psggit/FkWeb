import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../App/home";
import { chooseLocationReducer } from "../App/address/chooseLocation";
import { addressListReducer } from "../App/address";
import { tcReducer } from "../App/agreeAndContinue";
import { skuItemReducer } from "../App/common/brand";
import { searchDrinkReducer } from "../App/search";
import { searchByStoreReducer } from "../App/searchByStore";
import { userInfoCreateReducer } from "../App/userBasicInfo";
import { loginReducer } from "../App/login";
import { cartReducer } from "../App/common/cart";
import thunk from "redux-thunk";
import { storeFrontReducer } from "../App/storeFront";
import { myOrdersReducer } from "../App/myorders";
import { orderDetailReducer } from "../App/order";
import { stateCityReducer } from "../App/stateCity";
import { summaryReducer } from "../App/summary";
import { paymentReducer } from "../App/payment";
import { voucherCodesReducer } from "../App/voucherCode";
import { webPayReducer } from "../App/ext-payments";

import { localStorageManager } from "./localStorageManager";

const store = configureStore({
  reducer: combineReducers({
    home: homeReducer,
    tcStore: tcReducer,
    skuItem: skuItemReducer,
    searchByStore: searchByStoreReducer,
    storeFront: storeFrontReducer,
    searchItem: searchDrinkReducer,
    ubiStore: userInfoCreateReducer,
    login: loginReducer,
    addressStore: addressListReducer,
    cart: cartReducer,
    chooseLocation: chooseLocationReducer,
    myOrders: myOrdersReducer,
    order: orderDetailReducer,
    stateCity: stateCityReducer,
    summaryDetails: summaryReducer,
    payment: paymentReducer,
    voucherDetails: voucherCodesReducer,
    webPayments: webPayReducer,
  }),

  middleware: [thunk, localStorageManager],
});

export default store;
