import { connect } from "react-redux";
import { SelectAddressComponent } from "./selectAddressComponent";
import { SelectAddressOperation } from "../duck";

const mapStateToProps = (state) => {
  return {
    savedUserAddresses: state.addressStore.savedUserAddresses,
    selectedAddress: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectAddressFunc: (value) => dispatch(SelectAddressOperation(value)),
  };
};

const SelectAddressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAddressComponent);

export { SelectAddressContainer };
