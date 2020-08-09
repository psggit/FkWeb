import { createAction } from "@reduxjs/toolkit";

//getSearchByStoreInProgress get pending state
export const getSearchByStoreInWaiting = createAction("searchRetailerWaiting");

//getSearchByStoreInProgress get pending state
export const getSearchByStoreInProgress = createAction("searchRetailerPending");

//getSearchByStoreSuccess got the array of data
export const getSearchByStoreSuccess = createAction("searchRetailerSuccess");

//fetch search by store failed
export const getSearchByStoreFailed = createAction("searchRetailerFailure");