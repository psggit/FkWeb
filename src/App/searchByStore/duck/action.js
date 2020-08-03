import { createAction } from "@reduxjs/toolkit";

//getSearchByStoreInProgress get pending state
export const getSearchByStoreInProgress = createAction("PENDING");

//getSearchByStoreSuccess got the array of data
export const getSearchByStoreSuccess = createAction("SUCCESS");

//fetch search by store failed
export const getSearchByStoreFailed = createAction("FAILURE");
