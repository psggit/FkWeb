import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import { mapMarkerIcon, currentLocationIcon } from "../../../../assets/images";
import { BottomNextComponent } from "../../../common/bottomNext";
import { Alert } from "../../../common/alert";
import { searchIcon } from "../../../../assets/images";
import { useHistory } from "react-router-dom";
import "../style.scss";

import { LoadingComponent } from "../../../common/loading";

const mapStyle = require("./styles.json");

MapComponent.propTypes = {
  center: PropTypes.string,
  storeGpsFunc: PropTypes.func,
  current: PropTypes.object,
};

function MapComponent(props) {
  const gps = props.center.split(",");
  const mapRef = useRef(null);
  const [center, setCenter] = useState({
    lat: parseFloat(gps[0]),
    lng: parseFloat(gps[1]),
  });

  useEffect(() => {
    if (mapRef.current && props.current) {
      mapRef.current.setCenter(props.current);
      setCenter(props.current);
      props.storeGpsFunc(props.current);
    }
  }, [props.current]);

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

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCHGLLAB117OiC9rDD9ON3gRP1LQLAAQmI"
      libraries={["places"]}
    >
      <Autocomplete
        onLoad={onLoadAuto}
        onPlaceChanged={onPlaceChanged}
        onUnmount={onUnmount}
      >
        <div className="search-container">
          <img className="search-img" src={searchIcon} alt="searchIcon" />
          <input
            type="text"
            placeholder="Search Location"
            className="inputclass"
            onFocus={() => setCancelButton(true)}
            onBlur={() => setCancelButton(false)}
          />
          {isCancelButton ? <button>Cancel</button> : ""}
        </div>
      </Autocomplete>
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
        zoom={14}
        onLoad={onLoad}
        onDragEnd={onCenterChanged}
        onUnmount={onUnmount}
      />
    </LoadScript>
  );
}

MapWithMarkerComponent.propTypes = {
  center: PropTypes.string,
  redirect: PropTypes.string,
  storeGpsFunc: PropTypes.func,
  editAddress: PropTypes.object,
};
function MapWithMarkerComponent(props) {
  const history = useHistory();
  const [current, setCurrent] = React.useState(null);
  const [currentLoading, setCurrentLoading] = React.useState(false);
  const [locationError, setLocationError] = React.useState(false);
  const useCurrentLocation = () => {
    setCurrentLoading(true);
    navigator.geolocation.getCurrentPosition(
      (loc) => {
        setCurrent({ lat: loc.coords.latitude, lng: loc.coords.longitude });
        setCurrentLoading(false);
      },
      (err) => {
        console.log("err", err);
        setCurrentLoading(false);
        setLocationError(true);
      }
    );
  };
  function editAddress(address) {
    history.push({
      pathname: "/address/create/" + props.redirect,
      state: {
        editAddress: address,
      },
    });
  }
  return (
    <>
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
      <MapComponent
        center={props.center}
        current={current}
        storeGpsFunc={props.storeGpsFunc}
      />
      <img src={mapMarkerIcon} className="marker" />
      <img
        src={currentLocationIcon}
        className="current-location"
        onClick={useCurrentLocation}
      />
      <BottomNextComponent
        onClickFunc={() => editAddress(props.editAddress)}
        title="Set Location"
      />
    </>
  );
}

export { MapWithMarkerComponent };
