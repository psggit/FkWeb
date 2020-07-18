import React from "react";
import PropTypes from "prop-types";

GstNumberComponent.propTypes = {
  gstNumber: PropTypes.any,
};

function GstNumberComponent(props) {
  const gstNumber = props.gstNumber;
  return (
    <div className="gst-number-container">
      <div>GST Number</div>
      <div>{gstNumber}</div>
    </div>
  );
}

export default GstNumberComponent;
