import {
  birthYearEntered,
  changeGenderAction,
  selectIDTypeAction,
} from "./actions";

const ChangingBirthYear = (value) => {
  return (dispatch) => {
    var d = new Date().getFullYear() - 20;
    if (value <= d) {
      dispatch(birthYearEntered(value));
    }
  };
};

const ChangingGenderOperation = (value) => {
  return (dispatch) => {
    dispatch(changeGenderAction(value));
  };
};

const SelectIDTypeOperation = (value) => {
  return (dispatch) => {
    dispatch(selectIDTypeAction(value));
  };
};

export { ChangingBirthYear, ChangingGenderOperation, SelectIDTypeOperation };
