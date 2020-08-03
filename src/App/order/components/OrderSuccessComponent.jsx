import React from "react";
import PropTypes from "prop-types";
import { successIcon } from "../../../assets/images";

OrderSuccessComponent.propTypes = {
  orderPrice: PropTypes.string,
  retailerName: PropTypes.string,
};

function OrderSuccessComponent(props) {
  const { orderPrice, retailerName } = props;
  return (
    <>
      <div className="header-container">
        <img src={successIcon} className="header-image" />
        <div className="header-detail-container">
          <div className="order-price">{orderPrice}</div>
          <div className="retailer-name">{retailerName}</div>
        </div>
      </div>
    </>
  );
}

export { OrderSuccessComponent };
