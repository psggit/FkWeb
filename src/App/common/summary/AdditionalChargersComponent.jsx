import React from "react";
import PropTypes from "prop-types";
import { rightArrowIcon } from "../../../assets/images";

AdditionalChargersComponent.propTypes = {
  label: PropTypes.any,
  charges: PropTypes.any,
  chargesList: PropTypes.array,
};

function AdditionalChargersComponent(props) {
  const label = props.label;
  const charges = props.charges;

  const templateCharges = (props) => {
    return props.chargesList.map((charge) => {
      return (
        <div key={charge.display_name} className="detail-charges-container">
          <div>{charge.display_name}</div>
          <div>{charge.display_value}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="charges-container">
        <div className="label-container">
          <div>{label}</div>
          <img src={rightArrowIcon} className="icon" />
        </div>
        <div>{charges}</div>
      </div>
      {templateCharges(props)}
    </div>
  );
}

export default AdditionalChargersComponent;
