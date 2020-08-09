import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import { mapMarkerIcon } from "../../../../assets/images";
import { BottomNextComponent } from "../../../common/bottomNext";
import { searchIcon } from "../../../../assets/images";
import "../style.scss";

const mapStyle = require("./styles.json");

MapComponent.propTypes = {
  storeGpsFunc: PropTypes.func,
};

function MapComponent(props) {
  const mapRef = useRef(null);
  const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState({ lat: 13.006928, lng: 80.255516 });
  let [isCancelButton, setCancelButton] = useState(false);

  let [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onLoadAuto = (autocomplete) => {
    console.log("autocomplete ", autocomplete);
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
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const onUnmount = () => {
    mapRef.current = null;
    console.log("[onUnmounting]");
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

function MapWithMarkerComponent(props) {
  return (
    <>
      <MapComponent storeGpsFunc={props.storeGpsFunc} />
      <img src={mapMarkerIcon} className="marker" />
      <BottomNextComponent routePath="/address/create" title="Set Location" />
    </>
  );
}

export { MapWithMarkerComponent };
