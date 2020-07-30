import { createReducer } from "@reduxjs/toolkit";
import {
  fetchRetailersInProgress,
  fetchRetailersFailure,
  fetchRetailersSuccessfull,
} from "./actions";

const initialState = {
  retailerFetchStatus: "inProgress",
  is_city_available: false,
  retailers: [
    {
      retailer_id: 436,
      retailer_gps: "13.006324,80.256669",
      retailer_address:
        "Gokul Arcade, Sardar Patel Rd, Baktavatsalm Nagar, Adyar, Chennai, Tamil Nadu 600020",
      city_id: 5,
      state_id: 0,
      retailer_name: "Gokul Arcade",
      fssai_no: "TEST6840",
      phone: "7806828582",
      is_active: true,
      is_open: false,
      open_text: "",
      close_text: "",
      should_blur: false,
      store_info_msg: "Get delivery between 10:00 am - 12:00 pm today",
      is_today_holiday: false,
    },
  ],
};

const retailerListReducer = createReducer(initialState, {
  [fetchRetailersInProgress]: (state, action) => ({
    ...state,
    retailerFetchStatus: "inProgress",
  }),
  [fetchRetailersFailure]: (state, action) => ({
    ...state,
    retailerFetchStatus: "failed",
  }),
  [fetchRetailersSuccessfull]: (state, action) => ({
    ...state,
    retailerFetchStatus: "success",
    retailers: action.payload.data,
    is_city_available: action.payload.is_city_available,
  }),
});

export { retailerListReducer };
