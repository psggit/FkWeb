import React from "react";
import PropTypes from "prop-types";
import { rightArrowIcon } from "../../../assets/images";

AdditionalChargersComponent.propTypes = {
  label: PropTypes.any,
  charges: PropTypes.any,
};

function AdditionalChargersComponent(props) {
  const label = props.label;
  const charges = props.charges;
  return (
    <div>
      <div className="charges-container">
        <div className="label-container">
          <div>{label}</div>
          <img src={rightArrowIcon} className="icon" />
        </div>
        <div>{charges}</div>
      </div>
      <div className="detail-charges-container">
        <div>Delivery Charges</div>
        <div>Rs.19.50</div>
      </div>
      <div className="detail-charges-container">
        <div>Delivery Charges</div>
        <div>Rs.19.50</div>
      </div>
      <div className="detail-charges-container">
        <div>Delivery Charges</div>
        <div>Rs.19.50</div>
      </div>
      <div className="detail-charges-container">
        <div>Delivery Charges</div>
        <div>Rs.19.50</div>
      </div>
    </div>
  );
}

export default AdditionalChargersComponent;
