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
} from "./actions";
import { updateBasicKYCAPI } from "../../../utils";
import { validateKyc } from "./kycValidation";

const ChangingBirthYear = (value) => {
  return (dispatch) => {
    var d = new Date().getFullYear() - 20;
    if (value <= d) {
      dispatch(birthYearEntered(value));
      dispatch(CheckCheckBoxOperation());
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

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(kycUpdate(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(kycUpdateFailed(err.message));
  };
};

const processResponse = () => {
  return (res) => {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 400) {
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const UpdateKYCOperation = (value) => {
  let { valid, message } = validateKyc(value.kycType, value.kycValue);
  if (valid !== true) {
    return (dispatch) => dispatch(kycUpdateFailed(message));
  }
  var reqBody = {
    dob: value.dob,
    gender: value.gender,
    name: "",
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
  FinaliseIDProofValueOperation,
  ErrorClose,
  ChangingGenderOperation,
  UpdateKYCOperation,
  SelectIDTypeOperation,
  ChangeDocumentValueOperation,
  CheckDeclarationOperation,
};
