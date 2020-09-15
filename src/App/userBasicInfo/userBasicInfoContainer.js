import { connect } from "react-redux";
import { UserBasicInfoComponent } from "./userBasicInfoComponent";
import {
  ChangingName,
  ChangingBirthYear,
  ChangingGenderOperation,
  SelectIDTypeOperation,
  ChangeDocumentValueOperation,
  CheckDeclarationOperation,
  ErrorClose,
  FinaliseIDProofValueOperation,
  UpdateKYCOperation,
} from "./duck";

const mapStateToProps = (state, props) => {
  return {
    selectedAddress: state.addressStore.selectedAddress,
    name: state.ubiStore.name,
    yob: state.ubiStore.birthYear,
    gender: state.ubiStore.gender,
    consumerIDTypes: state.ubiStore.consumerIDTypes,
    selectedDocument: state.ubiStore.selectedDocument,
    finalisedDocument: state.ubiStore.finalisedDocument,
    showDeclaration: state.ubiStore.showDeclaration,
    checkDeclaration: state.ubiStore.checkDeclaration,
    selectedDocumentValue: state.ubiStore.selectedDocumentValue,
    collectUserDetails:
      state.summaryDetails.summaryDetails.is_basic_details_required,
    summaryDetails: state.summaryDetails,
    showError: state.ubiStore.showError,
    errorMessage: state.ubiStore.errorMessage,
    userInfo: state.ubiStore.userInfo,
    redirect: props.match.params.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (value) => dispatch(ChangingName(value)),
    changeBirthYear: (value) => dispatch(ChangingBirthYear(value)),
    changingGenderFunc: (value) => dispatch(ChangingGenderOperation(value)),
    selectingIDProofFunc: (value) => dispatch(SelectIDTypeOperation(value)),
    updateKycFunc: (value, bz_kyc_exist) =>
      dispatch(UpdateKYCOperation(value, bz_kyc_exist)),
    changeDocumentValueFunc: (value) =>
      dispatch(ChangeDocumentValueOperation(value)),
    finaliseIDProofFunc: (selectedDocument) =>
      dispatch(FinaliseIDProofValueOperation(selectedDocument)),
    checkDeclarationFunc: () => dispatch(CheckDeclarationOperation()),
    closeError: () => dispatch(ErrorClose()),
  };
};

const UserBasicInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBasicInfoComponent);

export { UserBasicInfoContainer };
