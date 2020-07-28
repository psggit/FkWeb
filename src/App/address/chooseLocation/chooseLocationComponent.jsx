import React, { useEffect } from "react";
import { ToolbarComponent } from "../../common/toolbar";
import { SearchBox } from "../../search/SearchBox";
import PropTypes from "prop-types";
import { MapWithMarkerComponent, PlacesDetailComponent } from "./components";
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
          {props.isSearchMode ? (
            <div className="page-container">
              <PlacesDetailComponent title="Adyar" address="Address of Adyar" />
            </div>
          ) : (
            <MapWithMarkerComponent />
          )}
        </div>
      </div>
    </>
  );
}

export { ChooseLocationComponent };
