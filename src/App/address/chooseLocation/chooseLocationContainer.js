import { connect } from "react-redux";
import { ChooseLocationComponent } from "./chooseLocationComponent";
import {
  autoCompleteOperation,
  getPlacesDetailsOperation,
  storeGpsOperation,
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
    editAddress: props.location.state.address,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoComplete: (value) => dispatch(autoCompleteOperation(value)),
    getPlacesDetails: (value) => dispatch(getPlacesDetailsOperation(value)),
    storeGpsFunc: (value) => dispatch(storeGpsOperation(value)),
  };
};

const ChooseLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseLocationComponent);

export { ChooseLocationContainer };
