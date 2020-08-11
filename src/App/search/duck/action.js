import { createAction } from "@reduxjs/toolkit";

//getSearchDrinksInProgress get pending state
export const getSearchDrinksInProgress = createAction("searchDrinksPENDING");

//getSearchDrinksSuccess got the array of data
export const getSearchDrinksSuccess = createAction("searchDrinksSUCCESS");

//fetch search drinks failed
export const getSearchDrinksFailed = createAction("searchDrinksFAILURE");
