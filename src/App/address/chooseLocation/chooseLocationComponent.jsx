import React, { useEffect, useState } from "react";
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
  mapCenterGps: PropTypes.object,
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
    return <div className="flex hcenter vcenter">Search for your locality...</div>;
  } else if (autoComplete.length == 0) {
    return <div className="flex hcenter vcenter">Sorry, No locations found...</div>;
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
  const autoCompletePlaces = props.autoCompletePlaces;
  return (
    <>
      <div>
        <ToolbarComponent title="Add New Address" />
        <div className="search-container">
          <SearchBox
            cancelEnable={props.isCancelButton}
	    onChange={props.autoComplete}
            onFocusOut={() => setSearchMode(false)}
            onFocusIn={() => setSearchMode(true)}
            placeholder="Search Location"
          />
          {props.isCancelButton ? <button>Cancel</button> : ""}
        </div>
        <div>
          <div className={(searchMode ? "" : "hide ") + "page-container"}>
              <AutoCompletePlacesComponent autoCompletePlaces={props.autoCompletePlaces}/>
           </div>
          <div className={searchMode ? "hide" : ""}>
            <MapWithMarkerComponent storeGpsFunc={props.storeGpsFunc} />
          </div>
        </div>
      </div>
    </>
  );
}

export { ChooseLocationComponent };
