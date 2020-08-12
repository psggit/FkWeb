import { connect } from "react-redux";
import { SelectAddressComponent } from "./selectAddressComponent";
import {
  SelectAddressOperation,
  FetchAddressListOperation,
  deleteAddressOperation,
  ValidateAddressOperation,
} from "../duck";

const mapStateToProps = (state, props) => {
  return {
    savedUserAddresses: state.addressStore.savedUserAddresses,
    selectedAddress: state.addressStore.selectedAddress,
    apiStatus: state.addressStore.apiCalls,
    redirect: props.match.params.redirect,
    isEmpty: state.cart.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delelteAddressFunc: (value) => dispatch(deleteAddressOperation(value)),
    selectAddressFunc: (value) => dispatch(SelectAddressOperation(value)),
    validateAddressFunc: (value) => dispatch(ValidateAddressOperation(value)),
    onMountFunc: (selectedAddress) =>
      dispatch(FetchAddressListOperation(selectedAddress)),
  };
};

const SelectAddressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAddressComponent);

export { SelectAddressContainer };
