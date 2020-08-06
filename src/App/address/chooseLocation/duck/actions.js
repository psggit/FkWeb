import { createAction } from "@reduxjs/toolkit";

const autoCompleteAction = createAction("autoCompleteAction");
const autoCompleteFailAction = createAction("autoCompleteFailAction");
const autoCompleteInProgressAction = createAction(
  "autoCompleteInProgressAction"
);
const getPlacesDetailsAction = createAction("getPlacesDetailsAction");
// const getAddressFromGpsAction = createAction("getAddressFromGpsAction");

//
const storeMapGpsAction = createAction("storeGpsAction");

export {
  autoCompleteAction,
  autoCompleteInProgressAction,
  autoCompleteFailAction,
  getPlacesDetailsAction,
  storeMapGpsAction,
};
