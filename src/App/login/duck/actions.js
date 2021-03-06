import { createAction } from "@reduxjs/toolkit";

//Fetch grant token, action to trigger fetching grant token
const fetchGrantToken = createAction("fetchGrantToken");

//get the grant token
const getGrantTokenInitiated = createAction("getGrantTokenInitiated");

//grantTokenSuccess got the grant token
const fetchGrantTokenSuccess = createAction("fetchGrantTokenSuccess");

//fetchGrantTokenFailed
const fetchGrantTokenFailed = createAction("fetchGrantTokenFailed");

//event emitted when users proceeds to login
const loginInitiated = createAction("loginInitiated");

//event emitted when we initiate login process using fk-sdk
const loginInProgress = createAction("loginInProgress");

const updateDeviceGps = createAction("updateDeviceGPS");

//On login success
const loginSuccess = createAction("loginSuccess");

//On login failure, retry in specific conditions
const loginFailed = createAction("loginFailed");

const guessAddressInProgress = createAction("guessAddressInProgress");
const guessAddressSuccess = createAction("guessAddressloginSuccess");
const guessAddressFailed = createAction("guessAddressloginFailed");

export {
  fetchGrantToken,
  getGrantTokenInitiated,
  fetchGrantTokenSuccess,
  fetchGrantTokenFailed,
  loginInitiated,
  loginInProgress,
  loginSuccess,
  loginFailed,
  updateDeviceGps,
  guessAddressInProgress,
  guessAddressSuccess,
  guessAddressFailed,
};
