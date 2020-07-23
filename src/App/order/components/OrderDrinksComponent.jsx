import React from "react";
import PropTypes from "prop-types";

OrderDrinksComponent.propTypes = {
  brandName: PropTypes.string,
  volume: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
};

function OrderDrinksComponent(props) {
  const { brandName, volume, price, quantity } = props;

  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">DRINKS</div>
        <div className="brand-item">
          <div className="brand-details">
            <div className="brand-name">{brandName}</div>
            <div className="brand-sku-details">
              {volume} | {price}
            </div>
          </div>
          <div className="quantity">{quantity}</div>
        </div>
      </div>
    </>
  );
}

export { OrderDrinksComponent };
