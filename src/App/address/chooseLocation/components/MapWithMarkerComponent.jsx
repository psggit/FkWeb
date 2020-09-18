import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import { mapMarkerIcon, currentLocationIcon } from "../../../../assets/images";
import { BottomNextComponent } from "../../../common/bottomNext";
import { Alert, AlertWithOptions } from "../../../common/alert";
import { useHistory } from "react-router-dom";
import "../style.scss";

import { SearchBox } from "../../../search";
import { LoadingComponent } from "../../../common/loading";

const mapStyle = require("./styles.json");
const placesLib = ["places"];

MapComponent.propTypes = {
  center: PropTypes.string,
  storeGpsFunc: PropTypes.func,
  current: PropTypes.object,
  updateCancel: PropTypes.func,
};

function MapComponent(props) {
  const gps = props.center.split(",");
  const mapRef = useRef(null);
  const [center, setCenter] = useState({
    lat: parseFloat(gps[0]),
    lng: parseFloat(gps[1]),
  });
  const [current, setCurrent] = useState(null);
  const [currentLoading, setCurrentLoading] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (mapRef.current && current) {
      mapRef.current.setCenter(current);
      setCenter(current);
      props.storeGpsFunc(current);
    }
  }, [current]);

  let [isCancelButton, setCancelButton] = useState(false);

  let [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onLoadAuto = (autocomplete) => {
    setAutoComplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      let newPos = {
        lat: autocomplete.getPlace().geometry.location.lat(),
        lng: autocomplete.getPlace().geometry.location.lng(),
      };
      setCenter(newPos);
      props.storeGpsFunc(newPos);
    }
  };

  const onUnmount = () => {
    mapRef.current = null;
    return null;
  };

  const onCenterChanged = () => {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    setCenter(newPos);
    props.storeGpsFunc(newPos);
  };

  const onFocusIn = () => {
    console.log("Foucus in");
    props.updateCancel(true);
    setCancelButton(true);
  };

  const onFocusOut = (e) => {
    console.log("Foucus out");
    props.updateCancel(false);
    setCancelButton(false);
    setQuery("");
    e.target.value = "";
  };

  const useCurrentLocation = () => {
    setCurrentLoading(true);
    navigator.geolocation.getCurrentPosition(
      (loc) => {
        setCurrent({ lat: loc.coords.latitude, lng: loc.coords.longitude });
        setCurrentLoading(false);
      },
      () => {
        setCurrentLoading(false);
        setLocationError(true);
      }
    );
  };

  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyCHGLLAB117OiC9rDD9ON3gRP1LQLAAQmI"
        libraries={placesLib}
      >
        <Autocomplete
          onLoad={onLoadAuto}
          onPlaceChanged={onPlaceChanged}
          onUnmount={onUnmount}
        >
          <div>
            <div className="search-container">
              <SearchBox
                handleInput={setQuery}
                placeholder="Search Location"
                onFocusIn={onFocusIn}
                onFocusOut={onFocusOut}
              />
              {isCancelButton ? <button>Cancel</button> : ""}
            </div>
            {isCancelButton && query.length < 2 ? (
              <div className="hcenter vcenter flex searchLocation">
                <div className="heading">Where do you live?</div>
                <div className="subHeading">
                  Enter your location & confirm it on the map
                </div>
              </div>
            ) : null}
          </div>
        </Autocomplete>
        <div className={isCancelButton ? "" : ""}>
          <GoogleMap
            id="gmap"
            options={{
              styles: mapStyle,
              streetViewControl: false,
              keyboardShortcuts: false, // disable keyboard shortcuts
              mapTypeControl: false,
              zoomControl: false,
              rotateControl: false,
              fullscreenControl: false,
              scaleControl: false, // allow scale controle
              scrollwheel: false, // allow scroll wheel
            }}
            mapContainerStyle={{
              width: "100%",
              bottom: "60px",
              top: "164px",
            }}
            center={center}
            zoom={16}
            onLoad={onLoad}
            onDragEnd={onCenterChanged}
            onUnmount={onUnmount}
          />
          {locationError && (
            <Alert
              handleOption={() => setLocationError(false)}
              show={true}
              content={
                "Unable to fetch your current location, please check location permission"
              }
              option={"Ok"}
            />
          )}
          {currentLoading && <LoadingComponent />}
          <img src={mapMarkerIcon} className="marker" />
          <div className="current-location">
            <img
              className="icon"
              src={currentLocationIcon}
              onClick={useCurrentLocation}
            />
          </div>
        </div>
      </LoadScript>
    </>
  );
}

MapWithMarkerComponent.propTypes = {
  center: PropTypes.string,
  redirect: PropTypes.string,
  storeGpsFunc: PropTypes.func,
  selectedGps: PropTypes.object,
  validateAddress: PropTypes.func,
  resetState: PropTypes.func,
  isDeliverableCheck: PropTypes.string,
  editAddress: PropTypes.object,
};
function MapWithMarkerComponent(props) {
  const history = useHistory();
  let [isCancelButton, setCancelButton] = useState(false);
  let [hideModal, setHideModal] = useState(false);

  useEffect(() => {
    console.log(props.isDeliverableCheck);
    if (props.isDeliverableCheck == "failed") {
      setHideModal(true);
    }
    if (props.isDeliverableCheck == "waiting") {
      setHideModal(false);
    }
    if (props.isDeliverableCheck == "success") {
      setHideModal(false);
      history.push({
        pathname: "/address/create/" + props.redirect,
        state: {
          editAddress: props.editAddress,
        },
      });
    }
  }, [props.isDeliverableCheck]);

  useEffect(() => {
    return () => {
      props.resetState();
    };
  }, []);
  const alertDetails = {
    title: "GPS Validation",
    content:
      "This location is not servicable yet. We're working hard to change that.",
    option1: "",
    option2: "OK",
    handleOption1: fnHideModal,
    handleOption2: fnHideModal,
  };

  function fnHideModal() {
    props.resetState();
  }

  function validateAddress() {
    props.validateAddress(props.selectedGps.lat + "," + props.selectedGps.lng);
  }
  return (
    <>
      {hideModal == true ? <AlertWithOptions {...alertDetails} /> : null}
      <MapComponent
        center={props.center}
        updateCancel={(val) => setCancelButton(val)}
        storeGpsFunc={props.storeGpsFunc}
      />
      {!isCancelButton && (
        <BottomNextComponent
          onClickFunc={() => validateAddress()}
          title="Set Location"
        />
      )}
    </>
  );
}

export { MapWithMarkerComponent };
