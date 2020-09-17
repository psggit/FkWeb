import { connect } from "react-redux";
import { ChooseLocationComponent } from "./chooseLocationComponent";
import {
  autoCompleteOperation,
  getPlacesDetailsOperation,
  storeGpsOperation,
  deliveryCheckAction,
  validateAddressOperation,
} from "./duck";

const mapStateToProps = (state, props) => {
  return {
    isSearchMode: state.chooseLocation.isSearchMode,
    isCancelButton: state.chooseLocation.isCancelButton,
    autoCompletePlaces: state.chooseLocation.autoCompletePlaces,
    placesInfo: state.chooseLocation.placesInfo,
    address: state.chooseLocation.selectedMapAddress,
    selectedCity: state.stateCity.selectedCity,
    mapCenterGps: state.chooseLocation.selectedGps,
    redirect: props.match.params.redirect,
    deviceGps: state.login.deviceGps,
    editAddress: props.location.state.address,
    isDeliverableCheck: state.chooseLocation.isDeliverableCheck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoComplete: (value) => dispatch(autoCompleteOperation(value)),
    getPlacesDetails: (value) => dispatch(getPlacesDetailsOperation(value)),
    validateAddress: (value) => dispatch(validateAddressOperation(value)),
    storeGpsFunc: (value) => dispatch(storeGpsOperation(value)),
    resetState: () => dispatch(deliveryCheckAction("waiting")),
  };
};

const ChooseLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseLocationComponent);

export { ChooseLocationContainer };
