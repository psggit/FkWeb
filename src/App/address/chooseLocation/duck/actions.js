import { createAction } from "@reduxjs/toolkit";

const autoCompleteAction = createAction("autoCompleteAction");
const getPlacesDetailsAction = createAction("getPlacesDetailsAction");
// const getAddressFromGpsAction = createAction("getAddressFromGpsAction");


//
const storeMapGpsAction = createAction("storeGpsAction");

export {
  autoCompleteAction,
  getPlacesDetailsAction,
  storeMapGpsAction,
};
