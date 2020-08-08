import { createAction } from "@reduxjs/toolkit";

//getSearchGenresInProgress get pending state
export const getSearchGenresInProgress = createAction("PENDING");

//getSearchGenresSuccess got the array of data
export const getSearchGenresSuccess = createAction("SUCCESS");

//fetch genres failed
export const getSearchGenresFailed = createAction("FAILURE");

//getBrandInProgress get pending state
export const getBrandInProgress = createAction("BRANDPENDING");

//getBrandSuccess got the array of data
export const getBrandSuccess = createAction("BRANDSUCCESS");

//getBrandSuccess got the array of data
export const getBrandPaginationSuccess = createAction("BRANDPAGINATIONSUCCESS");

//getBrandFailed get the error message
export const getBrandFailed = createAction("BRANDFAILURE");
