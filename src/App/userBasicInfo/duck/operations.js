import {
  birthYearEntered,
  changeGenderAction,
  kycUpdate,
  kycUpdateFailed,
  errorClose,
  showCheckboxAction,
  checkCheckboxAction,
  selectIDTypeAction,
  changeDocumentValueAction,
  finaliseIDTypeAction,
  nameEntered,
} from "./actions";
import { updateBasicKYCAPI } from "../../../utils";
import { validateKyc } from "./kycValidation";

const ChangingName = (value) => {
  return (dispatch) => {
    dispatch(nameEntered(value));
  };
};

const ChangingBirthYear = (value) => {
  return (dispatch) => {
    var d = new Date().getFullYear() - 21;
    if (value <= d && value.length <= 4) {
      dispatch(birthYearEntered(value));
      dispatch(CheckCheckBoxOperation());
    } else if (value > d) {
      dispatch(kycUpdateFailed("You need to be atleast 21 years to sign up."));
    }
  };
};

const ErrorClose = () => {
  return (dispatch) => {
    dispatch(errorClose());
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
    dispatch(changeDocumentValueAction(value.toUpperCase()));
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

const onSuccess = (dispatch) => {
  return (data) => {
    if (data.status === 200) {
      dispatch(kycUpdate(data));
    } else if (data.status === 403) {
      dispatch(kycUpdateFailed(data.body.message));
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(kycUpdateFailed(err.message));
  };
};

const processResponse = () => {
  return (res) => {
    return { body: res.json(), status: res.status };
  };
};

const validateName = (name) => {
  let valid = false;
  let message = "Please enter your name";
  if (name.length >= 1) {
    return { validName: true, nameError: "" };
  }
  return { validName: valid, nameError: message };
};

const UpdateKYCOperation = (value) => {
  //validate KYc
  let { valid, message } = validateKyc(value.kycType, value.kycValue);
  if (valid !== true) {
    return (dispatch) => dispatch(kycUpdateFailed(message));
  }

  //validate Name
  let { validName, nameError } = validateName(value.name);
  if (validName !== true) {
    return (dispatch) => dispatch(kycUpdateFailed(nameError));
  }

  var reqBody = {
    name: value.name,
    dob: value.dob,
    gender: value.gender,
    kyc_type: value.kycType,
    kyc_value: value.kycValue,
  };
  return (dispatch) => {
    updateBasicKYCAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export {
  ChangingBirthYear,
  ChangingName,
  FinaliseIDProofValueOperation,
  ErrorClose,
  ChangingGenderOperation,
  UpdateKYCOperation,
  SelectIDTypeOperation,
  ChangeDocumentValueOperation,
  CheckDeclarationOperation,
};
