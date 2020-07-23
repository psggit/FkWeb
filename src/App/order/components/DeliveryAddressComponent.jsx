import React from "react";
import PropTypes from "prop-types";

DeliveryAddressComponent.propTypes = {
  address: PropTypes.string,
  addressType: PropTypes.string,
};

function DeliveryAddressComponent(props) {
  const { addressType, address } = props;
  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">DELIVERY ADDRESS</div>
        <div className="address-type">{addressType}</div>
        <div className="address">{address}</div>
      </div>
    </>
  );
}

export { DeliveryAddressComponent };
