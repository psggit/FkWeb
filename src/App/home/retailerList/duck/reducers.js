import { createReducer } from "@reduxjs/toolkit";
import {
  fetchRetailersInProgress,
  fetchRetailersFailure,
  fetchRetailersSuccessfull,
} from "./actions";

const initialState = {
  retailerFetchStatus: "inProgress",
  is_city_available: false,
  retailers: [],
  message: null,
};

const retailerListReducer = createReducer(initialState, {
  [fetchRetailersInProgress]: (state) => ({
    ...state,
    retailerFetchStatus: "inProgress",
    message: null,
  }),
  [fetchRetailersFailure]: (state) => ({
    ...state,
    retailerFetchStatus: "failed",
    message: "Sorry, there seems to be a problem...Please, try again",
  }),
  [fetchRetailersSuccessfull]: (state, action) => ({
    ...state,
    retailerFetchStatus: "success",
    retailers: action.payload.data,
    message: action.payload.message,
    is_city_available: action.payload.is_city_available,
  }),
});

export { retailerListReducer };
