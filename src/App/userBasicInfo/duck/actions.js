import { createAction } from "@reduxjs/toolkit";

const birthYearEntered = createAction("birthYearEntered");

const changeGenderAction = createAction("changeGenderAction");

const selectIDTypeAction = createAction("selectIDTypeAction");

const finaliseIDTypeAction = createAction("finaliseIDTypeAction");

const changeDocumentValueAction = createAction("ChangeDocumentValueAction");

const showCheckboxAction = createAction("showCheckboxAction");

const checkCheckboxAction = createAction("checkCheckboxAction");


export {
  changeDocumentValueAction,
  birthYearEntered,
  selectIDTypeAction,
  changeGenderAction,
  finaliseIDTypeAction,
  showCheckboxAction,
  checkCheckboxAction,
};
