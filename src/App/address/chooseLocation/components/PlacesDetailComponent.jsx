import React from "react";
import { locationIcon } from "../../../../assets/images";
import PropTypes from "prop-types";
import "../style.scss";

PlacesDetailComponent.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
};

function PlacesDetailComponent(props) {
  return (
    <div className="add-new-address-wrapper">
      <img className="add-new-address-icon" src={locationIcon} />
      <div className="address-detail">
        <div className="title">{props.title}</div>
        <div className="address">{props.address}</div>
      </div>
    </div>
  );
}

export { PlacesDetailComponent };
