import { connect } from "react-redux";
import { SelectAddressComponent } from "./selectAddressComponent";
import { SelectAddressOperation, FetchAddressListOperation } from "../duck";

const mapStateToProps = (state, props) => {
  return {
    savedUserAddresses: state.addressStore.savedUserAddresses,
    selectedAddress: state.addressStore.selectedAddress,
    redirect: props.match.params.redirect,
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
