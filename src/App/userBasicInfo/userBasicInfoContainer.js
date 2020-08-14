import { connect } from "react-redux";
import { UserBasicInfoComponent } from "./userBasicInfoComponent";
import {
  ChangingBirthYear,
  ChangingGenderOperation,
  SelectIDTypeOperation,
  ChangeDocumentValueOperation,
  CheckDeclarationOperation,
  ErrorClose,
  FinaliseIDProofValueOperation,
  UpdateKYCOperation,
  login,
  exitToFk,
} from "./duck";

const mapStateToProps = (state) => {
  return {
    selectedAddress: state.addressStore.selectedAddress,
    yob: state.ubiStore.birthYear,
    gender: state.ubiStore.gender,
    consumerIDTypes: state.ubiStore.consumerIDTypes,
    selectedDocument: state.ubiStore.selectedDocument,
    finalisedDocument: state.ubiStore.finalisedDocument,
    showDeclaration: state.ubiStore.showDeclaration,
    checkDeclaration: state.ubiStore.checkDeclaration,
    selectedDocumentValue: state.ubiStore.selectedDocumentValue,
    loginInProgress: state.ubiStore.loginInProgress,
    loginSuccess: state.ubiStore.loginSuccess,
    loginFailed: state.ubiStore.loginFailed,
    collectUserDetails: state.ubiStore.collectUserDetails,
    showError: state.ubiStore.showError,
    errorMessage: state.ubiStore.errorMessage,
    userInfo: state.ubiStore.userInfo,
    grantTokenError: state.ubiStore.grantTokenError,
    grantTokenErrorMessage: state.ubiStore.grantTokenErrorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBirthYear: (value) => dispatch(ChangingBirthYear(value)),
    changingGenderFunc: (value) => dispatch(ChangingGenderOperation(value)),
    selectingIDProofFunc: (value) => dispatch(SelectIDTypeOperation(value)),
    updateKycFunc: (value) => dispatch(UpdateKYCOperation(value)),
    changeDocumentValueFunc: (value) =>
      dispatch(ChangeDocumentValueOperation(value)),
    finaliseIDProofFunc: (selectedDocument) =>
      dispatch(FinaliseIDProofValueOperation(selectedDocument)),
    checkDeclarationFunc: () => dispatch(CheckDeclarationOperation()),
    login: () => dispatch(login()),
    closeError: () => dispatch(ErrorClose()),
    exitToFk: () => dispatch(exitToFk()),
  };
};

const UserBasicInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBasicInfoComponent);

export { UserBasicInfoContainer };
