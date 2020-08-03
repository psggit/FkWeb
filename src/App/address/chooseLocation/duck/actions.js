import { createAction } from "@reduxjs/toolkit";

const autoCompleteAction = createAction("autoCompleteAction");
const getPlacesDetailsAction = createAction("getPlacesDetailsAction");
// const getAddressFromGpsAction = createAction("getAddressFromGpsAction");

const updateAddressFromGpsAction = createAction("updateAddressFromGpsAction");
const getAddressFromGpsFailAction = createAction("getAddressFromGpsFailAction");
const getAddressFromGpsInProgressAction = createAction(
  "getAddressFromGpsInProgressAction"
);

//
const storeMapGpsAction = createAction("storeGpsAction");

export {
  autoCompleteAction,
  getPlacesDetailsAction,
  storeMapGpsAction,
  getAddressFromGpsInProgressAction,
  updateAddressFromGpsAction,
  getAddressFromGpsFailAction,
};
