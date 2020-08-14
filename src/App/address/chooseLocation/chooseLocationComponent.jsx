import React, { useEffect, useState } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import PropTypes from "prop-types";
import { MapWithMarkerComponent, PlacesDetailComponent } from "./components";
import "./style.scss";

ChooseLocationComponent.propTypes = {
  isSearchMode: PropTypes.bool,
  isCancelButton: PropTypes.bool,
  autoCompletePlaces: PropTypes.array,
  placesInfo: PropTypes.object,
  address: PropTypes.object,
  editAddress: PropTypes.object,
  mapCenterGps: PropTypes.object,
  selectedCity: PropTypes.object,
  autoComplete: PropTypes.func,
  storeGpsFunc: PropTypes.func,
  isDeliverableCheck: PropTypes.string,
  validateAddress: PropTypes.func,
  resetState: PropTypes.func,
  getPlacesDetails: PropTypes.func,
  redirect: PropTypes.string,
};

AutoCompletePlacesComponent.propTypes = {
  autoCompletePlaces: PropTypes.array,
};

function AutoCompletePlacesComponent(props) {
  const autoCompletePlaces = props.autoCompletePlaces;
  if (autoCompletePlaces) {
    return (
      <div className="flex hcenter vcenter">Search for your locality...</div>
    );
  } else if (autoComplete.length == 0) {
    return (
      <div className="flex hcenter vcenter">Sorry, No locations found...</div>
    );
  } else {
    return <PlacesDetailComponent title="Adyar" address="Address of Adyar" />;
  }
}

function ChooseLocationComponent(props) {
  var center, title;
  useEffect(() => {
    window.addEventListener("focusout", () => {
      //SetCancelBtn(false);
    });
  });
  if (props.editAddress === null) {
    center = props.selectedCity.gps;
    title = "Add New Address";
  } else {
    center = props.editAddress.gps;
    title = "Edit Address";
  }
  return (
    <>
      <div>
        <ToolbarComponent helpVisibility={false} title={title} />

        <div>
          <MapWithMarkerComponent
            redirect={props.redirect}
            editAddress={props.editAddress}
            validateAddress={props.validateAddress}
            selectedGps={props.mapCenterGps}
            isDeliverableCheck={props.isDeliverableCheck}
            resetState={props.resetState}
            center={center}
            storeGpsFunc={props.storeGpsFunc}
          />
        </div>
      </div>
    </>
  );
}

export { ChooseLocationComponent };
