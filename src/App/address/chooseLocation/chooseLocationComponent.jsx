import React, { useEffect } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import { SearchBox } from "../../search/SearchBox";
import locationIcon from "../../../assets/images/location.svg";
import "../style.scss";
import PropTypes from "prop-types";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { compose, withProps } from "recompose";

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

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div
        style={{
          width: `100%`,
          position: `fixed`,
          bottom: `56px`,
          top: `164px`,
        }}
      />
    ),
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

function ChooseLocationComponent(props) {
  useEffect(() => {
    window.addEventListener("focusout", () => {
      //SetCancelBtn(false);
    });
  });

  function handleMarkerClick() {}

  return (
    <>
      <div>
        <ToolbarComponent title="Add New Address" />
        <div className="search-container">
          <SearchBox cancelEnable={props.isCancelButton} />
          {props.isCancelButton ? <button>Cancel</button> : ""}
        </div>
        <MyMapComponent
          isMarkerShown={true}
          onMarkerClick={handleMarkerClick}
        />
      </div>
    </>
  );
}
//{props.isSearchMode ? <PlacesDetailComponent /> : <MapComponent />}

export { ChooseLocationComponent };
