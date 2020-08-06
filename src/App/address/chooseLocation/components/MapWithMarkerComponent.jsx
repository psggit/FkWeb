import React, { useState, useRef } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import { mapMarkerIcon } from "../../../../assets/images";
import { BottomNextComponent } from "../../../common/bottomNext";
import "../style.scss";

const mapStyle = require("./styles.json");

function MapComponent(props) {
  const mapRef = useRef(null);
  const [map, setMap] = React.useState(null);
  const [center, setCenter] = useState({ lat: 13.006928, lng: 80.255516 });

  let [autocomplete, setAutoComplete] = useState(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onLoadAuto = (autocomplete) =>{
    console.log("autocomplete ", autocomplete);
    setAutoComplete(autocomplete);
  }

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      //console.log(autocomplete.getPlace())
      const details = autocomplete.getPlace();
      console.log(autocomplete);
      // const geometry = autocomplete.geometry.location.lat();
      const {formatted_address} = details;
      console.log(details, formatted_address);
      
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  const onUnmount = () => {
    mapRef.current = null
  };

  const onCenterChanged = () => {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    setCenter(newPos);
    console.log(newPos);
    props.storeGpsFunc(newPos);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCHGLLAB117OiC9rDD9ON3gRP1LQLAAQmI" libraries={["places"]}>
      <Autocomplete
        onLoad={onLoadAuto}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Customized your placeholder"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "50%",
            marginLeft: "-120px"
          }}
        />
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
        onDragEnd ={onCenterChanged}
        onUnmount={onUnmount}
      />
      
    </LoadScript>
  );
}

function MapWithMarkerComponent(props) {
  return (
    <>
      <MapComponent storeGpsFunc = {props.storeGpsFunc} />
      <img src={mapMarkerIcon} className="marker" />
      <BottomNextComponent routePath = "/address/create" title="Set Location" />
    </>
  );
}

export { MapWithMarkerComponent };
