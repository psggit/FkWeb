import { connect } from "react-redux";
import { UserBasicInfoComponent } from "./userBasicInfoComponent";
import {
  ChangingBirthYear,
  ChangingGenderOperation,
  SelectIDTypeOperation,
} from "./duck";

const mapStateToProps = (state) => {
  return {
    yob: state.ubiStore.birthYear,
    gender: state.ubiStore.gender,
    consumerIDTypes: state.ubiStore.consumerIDTypes,
    selectedDocument: state.ubiStore.selectedDocument,
    selectedDocumentValue: state.ubiStore.selectedDocumentValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBirthYear: (value) => dispatch(ChangingBirthYear(value)),
    changingGenderFunc: (value) => dispatch(ChangingGenderOperation(value)),
    selectingIDProofFunc: (value) => dispatch(SelectIDTypeOperation(value)),
  };
};

const UserBasicInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBasicInfoComponent);

export { UserBasicInfoContainer };
