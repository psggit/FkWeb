import { createAction } from "@reduxjs/toolkit";

//getSearchDrinksInProgress get pending state
export const getSearchDrinksInProgress = createAction("PENDING");

//getSearchDrinksSuccess got the array of data
export const getSearchDrinksSuccess = createAction("SUCCESS");

//fetch search drinks failed
export const getSearchDrinksFailed = createAction("FAILURE");
