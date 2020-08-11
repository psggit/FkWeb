import React, { useState } from "react";
import PropTypes from "prop-types";
import { upIndicatorIcon, downIndicatorIcon } from "../../../assets/images";

AdditionalChargersComponent.propTypes = {
  label: PropTypes.any,
  charges: PropTypes.any,
  chargesList: PropTypes.array,
};

function AdditionalChargersComponent(props) {
  const label = props.label;
  const charges = props.charges;

  const [expanded, SetEmpanded] = useState(false);

  const templateCharges = (props) => {
    return props.chargesList.map((charge, index) => {
      return (
        <div
          key={charge.display_name + index}
          className="detail-charges-container"
        >
          <div>{charge.display_name}</div>
          <div>{charge.display_value}</div>
        </div>
      );
    });
  };

  return (
    <div
      onClick={() => {
        SetEmpanded(!expanded);
      }}
    >
      <div className="charges-container">
        <div className="label-container">
          <div>{label}</div>
          <img
            src={expanded ? upIndicatorIcon : downIndicatorIcon}
            className="icon"
          />
        </div>
        <div>{charges}</div>
      </div>
      {expanded && templateCharges(props)}
    </div>
  );
}

export default AdditionalChargersComponent;
