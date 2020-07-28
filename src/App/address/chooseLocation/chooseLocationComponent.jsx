import React, { useEffect, useState } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import { SearchBox } from "../../search/SearchBox";
import "../style.scss";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { BottomNextComponent } from "../../common/bottomNext";
import { locationIcon, mapMarkerIcon } from "../../../assets/images";
import "./style.scss";

const mapStyle = require("./styles.json");

ChooseLocationComponent.propTypes = {
  isSearchMode: PropTypes.bool,
  isCancelButton: PropTypes.bool,
  autoCompletePlaces: PropTypes.array,
  placesInfo: PropTypes.object,
  address: PropTypes.object,
  mapCenterGps: PropTypes.string,
  autoComplete: PropTypes.func,
  getPlacesDetails: PropTypes.func,
  getAddressFromGps: PropTypes.func,
};

function PlacesDetailComponent(props) {
  return (
    <div className="add-new-address-wrapper">
      <img className="add-new-address-icon" src={locationIcon} />
      <div className="address-detail">
        <div className="title">Dubai Bus Stand</div>
        <div className="address">Dubai City, Dubai</div>
      </div>
    </div>
  );
}

function MapComponent() {
  const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState({ lat: 13.006928, lng: 80.255516 });

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onCenterChanged = React.useCallback(function callback() {
    if (map) {
      setCenter(map.getCenter());
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCHGLLAB117OiC9rDD9ON3gRP1LQLAAQmI">
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
          bottom: "120px",
          top: "164px",
        }}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onCenterChanged={onCenterChanged}
        onUnmount={onUnmount}
      />
    </LoadScript>
  );
}

function ChooseLocationComponent(props) {
  useEffect(() => {
    window.addEventListener("focusout", () => {
      //SetCancelBtn(false);
    });
  });

  return (
    <>
      <div>
        <ToolbarComponent title="Add New Address" />
        <div className="search-container">
          <SearchBox cancelEnable={props.isCancelButton} />
          {props.isCancelButton ? <button>Cancel</button> : ""}
        </div>
        <div>
          <MapComponent />
          <img src={mapMarkerIcon} className="marker" />
        </div>
        <BottomNextComponent title="Set Location" />
      </div>
    </>
  );
}
//{props.isSearchMode ? <PlacesDetailComponent /> : <MapComponent />}

export { ChooseLocationComponent };
