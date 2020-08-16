import { createAction } from "@reduxjs/toolkit";

const fetchRetailersSuccessfull = createAction("fetchRetailersSuccessfull");
const fetchRetailersFailure = createAction("fetchRetailersFailure");
const fetchRetailersInProgress = createAction("fetchRetailersInProgress");
const resetOnUnmount = createAction("resetOnUnmount");

export {
  fetchRetailersInProgress,
  fetchRetailersFailure,
  fetchRetailersSuccessfull,
  resetOnUnmount,
};
