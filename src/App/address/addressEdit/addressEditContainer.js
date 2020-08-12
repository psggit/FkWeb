import { connect } from "react-redux";
import { AddressEditComponent } from "./addressEditComponent.jsx";
import { getAddressFromGpsOperation, createAddressOperation } from "../duck";
import {
  updateAddressFromGpsAction,
  resetAddressAction,
} from "../duck/actions";
const mapStateToProps = (state, props) => {
  return {
    address: state.addressStore.selectedMapAddress,
    reqStatus: state.addressStore.apiCalls.createAddressStatus,
    getAddressStatus: state.addressStore.apiCalls.fetchAddressFromGPSStatus,
    mapCenterGps: state.chooseLocation.selectedGps,
    redirect: props.match.params.redirect,
    editAddress: props.location.state.editAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAddressFromGps: (value) => dispatch(getAddressFromGpsOperation(value)),
    createAddressFunc: (value) => dispatch(createAddressOperation(value)),
    updateField: (value) => dispatch(updateAddressFromGpsAction(value)),
    resetAddressFunc: () => dispatch(resetAddressAction()),
  };
};

const AddressEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressEditComponent);

export { AddressEditContainer };
