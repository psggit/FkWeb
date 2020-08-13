import {
  updateAddressFromGpsAction,
  getAddressFromGpsInProgressAction,
  selectAddressAction,
  validateAddressAction,
  updateAddressListAction,
  createAddressInProgressAction,
  createAddressFailAction,
  createAddressSuccessAction,
  deleteAddressInProgressAction,
  deleteAddressFailAction,
  deleteAddressSuccessAction,
  resetAddressAction,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";
// Default Api Call status
const apiCallDefaultStatus = {
  createAddressStatus: "waiting",
  deleteAddressStatus: "waiting",
  editAddressStatus: "waiting",
  listAddressStatus: "waiting",
  fetchAddressFromGPSStatus: "waiting",
  validateAddressStatus: "waiting",
};

const defaultAddressInputPageState = {
  address_id: null,
  current_address: null,
  pincode: null,
  landmark: null,
  flat_number: null,
  address_type: "Home",
};

export const currentStateVersion = 1;

const getAddressFromStorage = () => {
  try {
    let addr = localStorage.getItem("selectedAddress");
    if (addr !== null) {
      addr = JSON.parse(addr);
    }
    let version = localStorage.getItem("selectedAddressVersion");
    return { version, addr };
  } catch {
    return { version: null, addr: null };
  }
};

const initialState = () => {
  let address = null;
  let { version, addr } = getAddressFromStorage();
  if (version === currentStateVersion.toString()) {
    address = addr;
  }
  return {
    //version should be updated when there are breaking changes to the structure
    //of the state(ex: when removing an existing field or adding a new mandatory
    //field). This is to prevent breaking application when using localStore
    //to persist the data.
    version: currentStateVersion,
    selectedMapAddress: defaultAddressInputPageState,
    apiCalls: apiCallDefaultStatus,
    createAddressStatus: "waiting",
    selectedAddress: address,
    savedUserAddresses: [],
    dontDeleteCurrentAddress: false,
  };
};

const addressListReducer = createReducer(initialState(), {
  [selectAddressAction]: (state, action) => ({
    ...state,
    selectedAddress: action.payload,
  }),
  [validateAddressAction]: (state, action) => ({
    ...state,
    apiCalls: {
      ...apiCallDefaultStatus,
      validateAddressStatus: action.payload,
    },
  }),

  [updateAddressListAction]: (state, action) => ({
    ...state,
    savedUserAddresses: action.payload,
    apiCalls: { ...apiCallDefaultStatus, listAddressStatus: "success" },
  }),
  [updateAddressFromGpsAction]: (state, action) => ({
    ...state,
    selectedMapAddress: { ...state.selectedMapAddress, ...action.payload },
    apiCalls: { ...state.apiCalls, fetchAddressFromGPSStatus: "success" },
  }),
  [getAddressFromGpsInProgressAction]: (state) => ({
    ...state,
    apiCalls: { ...state.apiCalls, fetchAddressFromGPSStatus: "inProgress" },
  }),
  [resetAddressAction]: (state) => ({
    ...state,
    selectedMapAddress: defaultAddressInputPageState,
  }),
  [deleteAddressFailAction]: (state) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, deleteAddressStatus: "failed" },
  }),
  [deleteAddressSuccessAction]: (state) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, deleteAddressStatus: "success" },
  }),
  [deleteAddressInProgressAction]: (state) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, deleteAddressStatus: "inProgress" },
  }),
  [createAddressFailAction]: (state) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, createAddressStatus: "failed" },
  }),
  [createAddressSuccessAction]: (state) => ({
    ...state,
    selectedMapAddress: defaultAddressInputPageState,
    apiCalls: { ...apiCallDefaultStatus, createAddressStatus: "success" },
  }),
  [createAddressInProgressAction]: (state) => ({
    ...state,
    apiCalls: { ...apiCallDefaultStatus, createAddressStatus: "inProgress" },
  }),
});

export { addressListReducer };
