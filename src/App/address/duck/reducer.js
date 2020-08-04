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
  selectedAddress: {
    address_id: 106902,
    flat_number: "rajustreet",
    address:
      "1/33, Beach Rd, Radhakrishnan Nagar, Adyar, Chennai, Tamil Nadu 600041, India",
    type: "Home",
    gps: "12.993818985957093,80.26090878993273",
    landmark: "home",
    city_id: 5,
    state_short_name: "TN",
    pincode: "600041",
    pickup: true,
    delivery: true,
    city: {
      id: 5,
      name: "Chennai",
      gps: "13.082335,80.273258",
      is_active: true,
      wallet_available: true,
      self_pickup: true,
      quick_pay: true,
      deliverable: true,
      add_money: true,
      state_id: 0,
      catalog_mode: false,
      state_name: "",
      state_short_name: "",
      retailer_mode: true,
    },
    state: {
      id: 4,
      name: "Tamil Nadu",
      short_name: "TN",
      catalog_mode: false,
      deliverable_state: true,
    },
  },
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
