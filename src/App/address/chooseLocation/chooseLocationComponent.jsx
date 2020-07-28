import React, { useEffect } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import { SearchBox } from "../../search/SearchBox";
import "../style.scss";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { BottomNextComponent } from "../../common/bottomNext";
import { locationIcon, mapMarkerIcon } from "../../../assets/images";
import "./style.scss";

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

const containerStyle = {
  width: `100%`,
  position: `fixed`,
  bottom: `56px`,
  top: `164px`,
};

const center = {
  lat: 13.005958,
  lng: 80.250492,
};

function MapComponent() {
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCHGLLAB117OiC9rDD9ON3gRP1LQLAAQmI">
      <GoogleMap
        id="gmap"
        mapContainerStyle={{
          width: "100%",
          bottom: "120px",
          top: "164px",
        }}
        center={center}
        zoom={10}
        onLoad={onLoad}
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
