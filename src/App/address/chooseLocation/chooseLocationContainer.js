import { connect } from "react-redux";
import { SelectAddressOperation } from "../duck";
import { ChooseLocationComponent } from "./chooseLocationComponent";

const mapStateToProps = (state) => {
  return {
    isSearchMode: state.chooseLocation.isSearchMode,
    isCancelButton: state.chooseLocation.isCancelButton,
    autoCompletePlaces: state.chooseLocation.autoComplete.places,
    placesInfo: state.chooseLocation.placesInfo,
    address: state.chooseLocation.address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoComplete: (value) => dispatch(SelectAddressOperation(value)),
    getPlacesDetails: (value) => dispatch(SelectAddressOperation(value)),
    getAddressFromGps: (value) => dispatch(SelectAddressOperation(value)),
  };
};

const ChooseLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseLocationComponent);

export { ChooseLocationContainer };
