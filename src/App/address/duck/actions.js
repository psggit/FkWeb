import { createAction } from "@reduxjs/toolkit";

const selectAddressAction = createAction("selectAddressAction");

const updateAddressListAction = createAction("updateAddressListAction");

const fetchAddressListFailAction = createAction("fetchAddressListFailAction");

const fetchAddressListSuccessAction = createAction(
  "fetchAddressListSuccessAction"
);

// getAddressFromGPS actions
const updateAddressFromGpsAction = createAction("updateAddressFromGpsAction");
const getAddressFromGpsFailAction = createAction("getAddressFromGpsFailAction");
const getAddressFromGpsInProgressAction = createAction(
  "getAddressFromGpsInProgressAction"
);

// Create Address Actions
const createAddressSuccessAction = createAction("createAddressSuccessAction");
const createAddressFailAction = createAction("createAddressFailAction");
const createAddressInProgressAction = createAction(
  "createAddressInProgressAction"
);

// Delete Address Actions
const deleteAddressSuccessAction = createAction("deleteAddressSuccessAction");
const deleteAddressFailAction = createAction("deleteAddressFailAction");
const deleteAddressInProgressAction = createAction(
  "deleteAddressInProgressAction"
);

export {
  createAddressSuccessAction,
  createAddressInProgressAction,
  createAddressFailAction,
  deleteAddressSuccessAction,
  deleteAddressInProgressAction,
  deleteAddressFailAction,
  selectAddressAction,
  updateAddressListAction,
  fetchAddressListFailAction,
  fetchAddressListSuccessAction,
  getAddressFromGpsInProgressAction,
  updateAddressFromGpsAction,
  getAddressFromGpsFailAction,
};
