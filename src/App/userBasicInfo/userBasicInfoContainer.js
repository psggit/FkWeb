import { connect } from "react-redux";
import { UserBasicInfoComponent } from "./userBasicInfoComponent";
import {
  ChangingBirthYear,
  ChangingGenderOperation,
  SelectIDTypeOperation,
  ChangeDocumentValueOperation,
  CheckDeclarationOperation,
  FinaliseIDProofValueOperation,
  login,
} from "./duck";

const mapStateToProps = (state) => {
  return {
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBirthYear: (value) => dispatch(ChangingBirthYear(value)),
    changingGenderFunc: (value) => dispatch(ChangingGenderOperation(value)),
    selectingIDProofFunc: (value) => dispatch(SelectIDTypeOperation(value)),
    changeDocumentValueFunc: (value) =>
      dispatch(ChangeDocumentValueOperation(value)),
    finaliseIDProofFunc: () => dispatch(FinaliseIDProofValueOperation()),
    checkDeclarationFunc: () => dispatch(CheckDeclarationOperation()),
    login: () => dispatch(login()),
  };
};

const UserBasicInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBasicInfoComponent);

export { UserBasicInfoContainer };
