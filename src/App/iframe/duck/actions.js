import { createAction } from "@reduxjs/toolkit";

//event emitted when users proceeds to login
const loginInitiated = createAction("loginInitiated");

//event emitted when we initiate login process using fk-sdk
const loginInProgress = createAction("loginInProgress");

//On login success
const loginSuccess = createAction("loginSuccess");

//On login failure, retry in specific conditions
const loginFailed = createAction("loginFailed");

export { loginInitiated, loginInProgress, loginSuccess, loginFailed };
