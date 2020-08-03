import { selectAddressAction, updateAddressListAction } from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
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
  }),
});

export { addressListReducer };
