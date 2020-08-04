import {
  updateAddressFromGpsAction,
  selectAddressAction,
  updateAddressListAction,
  updateDeliveryAddress,
  updateFlatNumber,
  updatePincode,
  updateLandmark,
  updateAddressType,
  createAddressInProgressAction,
  createAddressFailAction,
  createAddressSuccessAction,
  deleteAddressInProgressAction,
  deleteAddressFailAction,
  deleteAddressSuccessAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";
// Default Api Call status
const apiCallDefaultStatus = {
  createAddressStatus: "waiting",
  deleteAddressStatus: "waiting",
  editAddressStatus: "waiting",
  listAddressStatus: "waiting",
};

const defaultAddressInputPageState = {
    address_id: null,
    current_address: null,
    pincode: null,
    landmark: null,
    flat_number: null,
    address_type: "Home",
}

const initialState = {
  selectedMapAddress: defaultAddressInputPageState,
  apiCalls: apiCallDefaultStatus,
  createAddressStatus: "waiting",
  selectedAddress: null,
  savedUserAddresses: [],
};


const addressListReducer = createReducer(initialState, {
  [selectAddressAction]: (state, action) => ({
    ...state,
    selectedAddress: action.payload,
  }),
  [updateAddressListAction]: (state, action) => ({
    ...state,
    savedUserAddresses: action.payload,
    apiCalls: { ...apiCallDefaultStatus, listAddressStatus: "success" }
  }),
  [updateAddressFromGpsAction]: (state, action) => ({
    ...state,
    selectedMapAddress: { ...state.selectedMapAddress, ...action.payload },
  }),
  [deleteAddressFailAction]: (state, action) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, deleteAddressStatus: "failed" }
  }),
  [deleteAddressSuccessAction]: (state, action) => ({
    ...state,
    selectedAddress: {},
    apiCalls: { ...apiCallDefaultStatus, deleteAddressStatus: "success" }
  }),
  [deleteAddressInProgressAction]: (state, action) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, deleteAddressStatus: "inProgress" }
  }),
  [createAddressFailAction]: (state, action) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, createAddressStatus: "failed" }
  }),
  [createAddressSuccessAction]: (state, action) => ({
    ...state,
    selectedMapAddress: defaultAddressInputPageState,
    apiCalls: { ...apiCallDefaultStatus, createAddressStatus: "success" }
  }),
  [createAddressInProgressAction]: (state, action) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, createAddressStatus: "inProgress" }
  }),
});

export { addressListReducer };
