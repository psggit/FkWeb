import React, { useLayoutEffect, useState } from "react";
import { ToolbarComponent } from "../common/toolbar";
import { SplashLoadingComponent } from "../common/splashLoading";
import "./style.scss";
import { StateCityItem } from "./components";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { appIcon } from "../../assets/images";

StateCityComponent.propTypes = {
  fetchStateInProgress: PropTypes.bool,
  fetchStateFailed: PropTypes.bool,
  fetchStateSuccess: PropTypes.bool,
  fetchCityInProgress: PropTypes.bool,
  fetchCityFailed: PropTypes.bool,
  fetchCitySuccess: PropTypes.bool,
  states: PropTypes.array,
  cities: PropTypes.array,
  getAvailableCities: PropTypes.func,
  getAvailableStates: PropTypes.func,
  selectCityFunc: PropTypes.func,
  clearCity: PropTypes.func,
  selectStateFunc: PropTypes.func,
};

function StateCityComponent(props) {
  const history = useHistory();
  const [mode, setMode] = useState("state");
  const [selectedState, setSelectedState] = useState(null);

  function showAddressSelection() {
    history.push({
      pathname: "/user/login",
      //state: { gps: city.gps },
    });
  }

  function selectState(state) {
    setSelectedState(state);
    props.selectStateFunc(state);
    setMode("city");
    props.getAvailableCities({
      state_id: state.id,
    });
  }

  function selectCity(city) {
    props.selectCityFunc(city);
    showAddressSelection(city);
  }

  const cityItems = (props) => {
    return props.cities.map((city) => {
      return (
        <StateCityItem
          key={city.id}
          title={city.name}
          onClick={() => {
            selectCity(city);
          }}
        />
      );
    });
  };

  const stateItems = (props) => {
    return props.states.map((state) => {
      return (
        <StateCityItem
          key={state.id}
          title={state.name}
          onClick={() => {
            selectState(state);
          }}
        />
      );
    });
  };

  useLayoutEffect(() => {
    props.getAvailableStates();
  }, []);

  function goBack() {
    if (mode == "city") {
      props.clearCity();
      setMode("state");
    } else {
      history.goBack();
    }
  }

  return (
    <>
      <ToolbarComponent onClick={goBack} backVisibility={mode != "state"} />
      {props.fetchStateFailed === true && (
        <SplashLoadingComponent
          motion={false}
          text="Something went wrong, please try again."
          buttonFunc={() => props.getAvailableStates()}
          buttonText="Retry"
        />
      )}
      {props.fetchCityFailed === true && (
        <SplashLoadingComponent
          motion={false}
          text={"Something went wrong, please try again."}
          buttonFunc={() => selectState(selectedState)}
          buttonText={"Retry"}
        />
      )}
      <div className="page-container ">
        <img src={appIcon} className="location-app-image" />
        <div className="location-msg">
          Hey there! Browse HipBar by selecting any of the below listed{" "}
          {mode === "state" ? "states" : "cities"}:
        </div>
        {mode == "state" && props.states ? stateItems(props) : <div />}
        {mode == "city" && props.cities ? cityItems(props) : <div />}
      </div>
    </>
  );
}

export { StateCityComponent };
