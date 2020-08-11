import { connect } from "react-redux";
import { SelectAddressComponent } from "./selectAddressComponent";
import {
  SelectAddressOperation,
  FetchAddressListOperation,
  deleteAddressOperation,
} from "../duck";

const mapStateToProps = (state, props) => {
  return {
    savedUserAddresses: state.addressStore.savedUserAddresses,
    selectedAddress: state.addressStore.selectedAddress,
    apiStatus: state.addressStore.apiCalls,
    redirect: props.match.params.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delelteAddressFunc: (value) => dispatch(deleteAddressOperation(value)),
    selectAddressFunc: (value) => dispatch(SelectAddressOperation(value)),
    onMountFunc: (selectedAddress) => dispatch(FetchAddressListOperation(selectedAddress)),
  };
};

const SelectAddressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAddressComponent);

export { SelectAddressContainer };
