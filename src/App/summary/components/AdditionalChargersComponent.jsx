import React from "react";
import PropTypes from "prop-types";
import downIcon from "../../../assets/images/right_arrow.svg";

AdditionalChargersComponent.propTypes = {
  label: PropTypes.any,
  charges: PropTypes.any,
};

function AdditionalChargersComponent(props) {
  const label = props.label;
  const charges = props.charges;
  return (
    <div className="charges-container">
      <div className="label-container">
        <div>{label}</div>
        <img src={downIcon} className="icon" />
      </div>
      <div>{charges}</div>
    </div>
  );
}

export default AdditionalChargersComponent;
