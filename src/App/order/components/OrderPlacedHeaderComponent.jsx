import React from "react";
import PropTypes from "prop-types";
import successIcon from "../../../assets/images/success.svg";

OrderPlacedHeaderComponent.propTypes = {
  orderPrice: PropTypes.string,
  retailerName: PropTypes.string,
  purchasedOn: PropTypes.string,
  orderID: PropTypes.string,
};

function OrderPlacedHeaderComponent(props) {
  const { orderPrice, retailerName, purchasedOn, orderID } = props;

  return (
    <>
      <div className="header-container">
        <img src={successIcon} className="header-image" />
        <div className="header-detail-container">
          <div className="order-price">{orderPrice}</div>
          <div className="retailer-name">{retailerName}</div>
        </div>
      </div>
      <div className="order-info">
        <div className="detail">
          <div className="header">Purchased on:</div>
          <div className="content">{purchasedOn}</div>
        </div>
        <div className="detail">
          <div className="header">Order ID:</div>
          <div className="content">{orderID}</div>
        </div>
      </div>
    </>
  );
}

export { OrderPlacedHeaderComponent };
