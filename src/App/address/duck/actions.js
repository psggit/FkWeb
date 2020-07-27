import { createAction } from "@reduxjs/toolkit";

const selectAddressAction = createAction("selectAddressAction");

const updateAddressListAction = createAction("updateAddressListAction");

const fetchAddressListFailAction = createAction("fetchAddressListFailAction");

const fetchAddressListSuccessAction = createAction(
  "fetchAddressListSuccessAction"
);

export {
  selectAddressAction,
  updateAddressListAction,
  fetchAddressListFailAction,
  fetchAddressListSuccessAction,
};
