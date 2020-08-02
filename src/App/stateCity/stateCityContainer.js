import { connect } from "react-redux";
import {
  GetAvailableCitiesOperation,
  GetAvailableStatesOperation,
} from "./duck";
import { StateCityComponent } from "./stateCityComponent";

const mapStateToProps = (state) => {
  return {
    fetchStateInProgress: state.stateCity.fetchStateInProgress,
    fetchStateSuccess: state.stateCity.fetchStateSuccess,
    fetchStateFailed: state.stateCity.fetchStateFailed,
    fetchCityInProgress: state.stateCity.fetchCityInProgress,
    fetchCitySuccess: state.stateCity.fetchCitySuccess,
    fetchCityFailed: state.stateCity.fetchCityFailed,
    states: state.stateCity.states,
    cities: state.stateCity.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAvailableCities: (value) => dispatch(GetAvailableCitiesOperation(value)),
    getAvailableStates: (value) => dispatch(GetAvailableStatesOperation(value)),
  };
};

const StateCityContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StateCityComponent);

export { StateCityContainer };
