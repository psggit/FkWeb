import { connect } from "react-redux";
import { SelectAddressComponent } from "./selectAddressComponent";
import { SelectAddressOperation, FetchAddressListOperation } from "../duck";

const mapStateToProps = (state) => {
  return {
    savedUserAddresses: state.addressStore.savedUserAddresses,
    selectedAddress: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectAddressFunc: (value) => dispatch(SelectAddressOperation(value)),
    onMountFunc: () => dispatch(FetchAddressListOperation()),
  };
};

const SelectAddressContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectAddressComponent);

export { SelectAddressContainer };
