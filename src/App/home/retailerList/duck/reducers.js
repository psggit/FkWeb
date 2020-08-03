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
};

const retailerListReducer = createReducer(initialState, {
  [fetchRetailersInProgress]: (state) => ({
    ...state,
    retailerFetchStatus: "inProgress",
  }),
  [fetchRetailersFailure]: (state) => ({
    ...state,
    retailerFetchStatus: "failed",
  }),
  [fetchRetailersSuccessfull]: (state, action) => ({
    ...state,
    retailerFetchStatus: "success",
    retailers: action.payload,
    is_city_available: action.payload.is_city_available,
  }),
});

export { retailerListReducer };
