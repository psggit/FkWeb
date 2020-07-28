import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { mapMarkerIcon } from "../../../../assets/images";
import { BottomNextComponent } from "../../../common/bottomNext";
import "../style.scss";

const mapStyle = require("./styles.json");

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

function MapWithMarkerComponent() {
  return (
    <>
      <MapComponent />
      <img src={mapMarkerIcon} className="marker" />
      <BottomNextComponent title="Set Location" />
    </>
  );
}

export { MapWithMarkerComponent };
