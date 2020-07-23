import {
  selectAddressAction,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  selectedAddress: {},
  savedUserAddresses: [
    {
      "address_id":106902,
      "flat_number":"rajustreet",
      "address":"1/33, Beach Rd, Radhakrishnan Nagar, Adyar, Chennai, Tamil Nadu 600041, India",
      "type":"Home",
      "gps":"12.993818985957093,80.26090878993273",
      "landmark":"home",
      "city_id":5,
      "state_short_name":"TN",
      "pincode":"600041",
      "pickup":true,
      "delivery":true,
      "city":{
        "id":5,
        "name":"Chennai",
        "gps":"13.082335,80.273258",
        "is_active":true,
        "wallet_available":true,
        "self_pickup":true,
        "quick_pay":true,
        "deliverable":true,
        "add_money":true,
        "state_id":0,
        "catalog_mode":false,
        "state_name":"",
        "state_short_name":"",
        "retailer_mode":true
      },
      "state":{
        "id":4,
        "name":"Tamil Nadu",
        "short_name":"TN",
        "catalog_mode":false,
        "deliverable_state":true
      }
    },
    {
      "address_id":106905,
      "flat_number":"rajustreet",
      "address":"1/33, Beach Rd, Radhakrishnan Nagar, Adyar, Chennai, Tamil Nadu 600041, India",
      "type":"Homksalks askdlf",
      "gps":"12.993818985957093,80.26090878993273",
      "landmark":"home",
      "city_id":5,
      "state_short_name":"TN",
      "pincode":"600041",
      "pickup":true,
      "delivery":true,
      "city":{
        "id":5,
        "name":"Chennai",
        "gps":"13.082335,80.273258",
        "is_active":true,
        "wallet_available":true,
        "self_pickup":true,
        "quick_pay":true,
        "deliverable":true,
        "add_money":true,
        "state_id":0,
        "catalog_mode":false,
        "state_name":"",
        "state_short_name":"",
        "retailer_mode":true
      },
      "state":{
        "id":4,
        "name":"Tamil Nadu",
        "short_name":"TN",
        "catalog_mode":false,
        "deliverable_state":true
      }
    },
    {
      "address_id":106909,
      "flat_number":"rajustreet",
      "address":"1/33, Beach Rd, Radhakrishnan Nagar, Adyar, Chennai, Tamil Nadu 600041, India",
      "type":"Home",
      "gps":"12.993818985957093,80.26090878993273",
      "landmark":"home",
      "city_id":5,
      "state_short_name":"TN",
      "pincode":"600041",
      "pickup":true,
      "delivery":true,
      "city":{
        "id":5,
        "name":"Chennai",
        "gps":"13.082335,80.273258",
        "is_active":true,
        "wallet_available":true,
        "self_pickup":true,
        "quick_pay":true,
        "deliverable":true,
        "add_money":true,
        "state_id":0,
        "catalog_mode":false,
        "state_name":"",
        "state_short_name":"",
        "retailer_mode":true
      },
      "state":{
        "id":4,
        "name":"Tamil Nadu",
        "short_name":"TN",
        "catalog_mode":false,
        "deliverable_state":true
      }
    },
    {
      "address_id":106903,
      "flat_number":"rajustreet",
      "address":"1/33, Beach Rd, Radhakrishnan Nagar, Adyar, Chennai, Tamil Nadu 600041, India",
      "type":"Home",
      "gps":"12.993818985957093,80.26090878993273",
      "landmark":"home",
      "city_id":5,
      "state_short_name":"TN",
      "pincode":"600041",
      "pickup":true,
      "delivery":true,
      "city":{
        "id":5,
        "name":"Chennai",
        "gps":"13.082335,80.273258",
        "is_active":true,
        "wallet_available":true,
        "self_pickup":true,
        "quick_pay":true,
        "deliverable":true,
        "add_money":true,
        "state_id":0,
        "catalog_mode":false,
        "state_name":"",
        "state_short_name":"",
        "retailer_mode":true
      },
      "state":{
        "id":4,
        "name":"Tamil Nadu",
        "short_name":"TN",
        "catalog_mode":false,
        "deliverable_state":true
      }
    }
  ],
};

const addressListReducer = createReducer(initialState, {
  [selectAddressAction]: (state, action) => ({
    ...state,
    selectedAddress: action.payload,
  }),
});

export { addressListReducer };
