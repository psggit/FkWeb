import { createAction } from "@reduxjs/toolkit";

const birthYearEntered = createAction("birthYearEntered");

const changeGenderAction = createAction("changeGenderAction");

const selectIDTypeAction = createAction("selectIDTypeAction");

export { birthYearEntered, selectIDTypeAction, changeGenderAction };
