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
  mapCenterGps: PropTypes.object,
  selectedCity: PropTypes.object,
  autoComplete: PropTypes.func,
  storeGpsFunc: PropTypes.func,
  getPlacesDetails: PropTypes.func,
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
  useEffect(() => {
    window.addEventListener("focusout", () => {
      //SetCancelBtn(false);
    });
  });
  const [searchMode, setSearchMode] = useState(false);
  return (
    <>
      <div>
        <ToolbarComponent helpVisibility={false} title="Add New Address" />

        <div>
          <div className={(searchMode ? "" : "hide ") + "page-container"}>
            <AutoCompletePlacesComponent
              autoCompletePlaces={props.autoCompletePlaces}
            />
          </div>
          <div className={searchMode ? "hide" : ""}>
            <MapWithMarkerComponent
              center={props.selectedCity.gps}
              storeGpsFunc={props.storeGpsFunc}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { ChooseLocationComponent };
