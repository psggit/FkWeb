import { connect } from "react-redux";
import { AddressEditComponent } from "./addressEditComponent.jsx";
import { getAddressFromGpsOperation, createAddressOperation } from "../duck"
import { updateAddressFromGpsAction } from "../duck/actions"
const mapStateToProps = (state) => {
  return {
    address: state.addressStore.selectedMapAddress,
    reqStatus: state.addressStore.apiCalls.createAddressStatus,
    mapCenterGps: state.chooseLocation.selectedGps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddressFromGps: (value) => dispatch(getAddressFromGpsOperation(value)),
    createAddressFunc: (value) => dispatch(createAddressOperation(value)),
    updateField: (value) => dispatch(updateAddressFromGpsAction(value)),
  };
};

const AddressEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressEditComponent);

export { AddressEditContainer };
