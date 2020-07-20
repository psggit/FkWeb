import { connect } from "react-redux";
import { UserBasicInfoComponent } from "./userBasicInfoComponent";
import {
  ChangingBirthYear,
  ChangingGenderOperation,
  SelectIDTypeOperation,
  ChangeDocumentValueOperation,
  CheckDeclarationOperation,
  FinaliseIDProofValueOperation,
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBirthYear: (value) => dispatch(ChangingBirthYear(value)),
    changingGenderFunc: (value) => dispatch(ChangingGenderOperation(value)),
    selectingIDProofFunc: (value) => dispatch(SelectIDTypeOperation(value)),
    changeDocumentValueFunc: (value) => dispatch(ChangeDocumentValueOperation(value)),
    finaliseIDProofFunc: ()=>dispatch(FinaliseIDProofValueOperation()),
    checkDeclarationFunc: ()=>dispatch(CheckDeclarationOperation()),
  };
};

const UserBasicInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBasicInfoComponent);

export { UserBasicInfoContainer };
