import { connect } from "react-redux";
import { ChooseLocationComponent } from "./chooseLocationComponent";
import {
  autoCompleteOperation,
  getPlacesDetailsOperation,
  getAddressFromGpsOperation,
} from "./duck";

const mapStateToProps = (state) => {
  return {
    isSearchMode: state.chooseLocation.isSearchMode,
    isCancelButton: state.chooseLocation.isCancelButton,
    autoCompletePlaces: state.chooseLocation.autoComplete.autoCompletePlaces,
    placesInfo: state.chooseLocation.placesInfo,
    address: state.chooseLocation.address,
    mapCenterGps: state.chooseLocation.mapCenterGps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoComplete: (value) => dispatch(autoCompleteOperation(value)),
    getPlacesDetails: (value) => dispatch(getPlacesDetailsOperation(value)),
    getAddressFromGps: (value) => dispatch(getAddressFromGpsOperation(value)),
  };
};

const ChooseLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseLocationComponent);

export { ChooseLocationContainer };
