import React, { useLayoutEffect, useState } from "react";
import { ToolbarComponent } from "../common/toolbar";
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
};

function StateCityComponent(props) {
  const history = useHistory();
  const [mode, setMode] = useState("state");

  function showAddressSelection(city) {
    history.push({
      pathname: "/user/login",
      state: { gps: city.gps },
    });
  }

  function selectState(state) {
    setMode("city");
    props.getAvailableCities({
      state_id: state.id,
    });
  }

  function selectCity(city) {
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
    console.log(props.states);
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
      setMode("state");
    } else {
      history.goBack();
    }
  }

  return (
    <>
      <ToolbarComponent onClick={goBack} />
      <div className="page-container ">
        <img src={appIcon} className="location-app-image" />
        <div className="location-msg">
          Hey there! Browse HipBar by selecting any of the below listed {mode}{" "}
          locations:
        </div>
        {mode == "state" && props.states ? stateItems(props) : <div />}
        {mode == "city" && props.cities ? cityItems(props) : <div />}
      </div>
    </>
  );
}

export { StateCityComponent };
