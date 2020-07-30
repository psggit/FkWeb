import { createAction } from "@reduxjs/toolkit";

const fetchRetailersSuccessfull = createAction("fetchRetailersSuccessfull");
const fetchRetailersFailure = createAction("fetchRetailersFailure");
const fetchRetailersInProgress = createAction("fetchRetailersInProgress");

export {
  fetchRetailersInProgress,
  fetchRetailersFailure,
  fetchRetailersSuccessfull,
};
