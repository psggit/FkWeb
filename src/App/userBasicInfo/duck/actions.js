import { createAction } from "@reduxjs/toolkit";

const nameEntered = createAction("nameEntered");

const birthYearEntered = createAction("birthYearEntered");

const changeGenderAction = createAction("changeGenderAction");

const selectIDTypeAction = createAction("selectIDTypeAction");

const finaliseIDTypeAction = createAction("finaliseIDTypeAction");

const changeDocumentValueAction = createAction("ChangeDocumentValueAction");

const showCheckboxAction = createAction("showCheckboxAction");

const checkCheckboxAction = createAction("checkCheckboxAction");
/*
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

//On login success
const loginSuccess = createAction("loginSuccess");

//On login failure, retry in specific conditions
const loginFailed = createAction("loginFailed");*/

const kycUpdate = createAction("kycUpdate");

const kycUpdateFailed = createAction("kycUpdatedFailed");
const errorClose = createAction("closeError");

const resetOnUnmount = createAction("resetOnUnmount");

export {
  changeDocumentValueAction,
  kycUpdate,
  kycUpdateFailed,
  errorClose,
  nameEntered,
  birthYearEntered,
  selectIDTypeAction,
  changeGenderAction,
  finaliseIDTypeAction,
  showCheckboxAction,
  checkCheckboxAction,
  resetOnUnmount,
};
