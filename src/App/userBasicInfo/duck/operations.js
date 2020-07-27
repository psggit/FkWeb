import {
  birthYearEntered,
  changeGenderAction,
  showCheckboxAction,
  checkCheckboxAction,
  selectIDTypeAction,
  changeDocumentValueAction,
  finaliseIDTypeAction,
} from "./actions";

const ChangingBirthYear = (value) => {
  return (dispatch) => {
    var d = new Date().getFullYear() - 20;
    if (value <= d) {
      dispatch(birthYearEntered(value));
      dispatch(CheckCheckBoxOperation());
    }
  };
};

const ChangingGenderOperation = (value) => {
  return (dispatch) => {
    dispatch(changeGenderAction(value));
    dispatch(CheckCheckBoxOperation());
  };
};

const CheckCheckBoxOperation = () => {
  return (dispatch, getState) => {
    let store = getState().ubiStore;
    if (
      store.gender != "" &&
      store.birthYear.length == 4 &&
      store.finalisedDocument != "" &&
      store.selectedDocumentValue != ""
    ) {
      dispatch(showCheckboxAction(true));
    } else {
      dispatch(showCheckboxAction(false));
    }
    dispatch(checkCheckboxAction(false));
  };
};

const CheckDeclarationOperation = () => {
  return (dispatch, getState) => {
    if (getState().ubiStore.showDeclaration) {
      dispatch(checkCheckboxAction(!getState().ubiStore.checkDeclaration));
    }
  };
};

const ChangeDocumentValueOperation = (value) => {
  return (dispatch) => {
    dispatch(changeDocumentValueAction(value));
    dispatch(CheckCheckBoxOperation());
  };
};

const SelectIDTypeOperation = (value) => {
  return (dispatch) => {
    dispatch(selectIDTypeAction(value));
  };
};

const FinaliseIDProofValueOperation = (selectedDocument) => {
  return (dispatch) => {
      dispatch(finaliseIDTypeAction(selectedDocument));
      dispatch(CheckCheckBoxOperation());
  };
};

export {
  ChangingBirthYear,
  FinaliseIDProofValueOperation,
  ChangingGenderOperation,
  SelectIDTypeOperation,
  ChangeDocumentValueOperation,
  CheckDeclarationOperation,
};
