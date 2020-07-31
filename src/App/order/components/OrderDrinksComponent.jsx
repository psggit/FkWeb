import React from "react";
import PropTypes from "prop-types";

OrderDrinksComponent.propTypes = {
  items: PropTypes.array,
};

function OrderDrinksComponent(props) {
  const brandItems = (props) => {
    return props.items.map((item) => {
      return (
        <div key={item.brand_name + item.volume} className="brand-item">
          <div className="brand-details">
            <div className="brand-name">{item.brand_name}</div>
            <div className="brand-sku-details">
              {item.volume + " ml"} | {item.reserved_price}
            </div>
          </div>
          <div className="quantity">{item.count}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="generic-detail-container">
        <div className="order-sub-header">DRINKS</div>
        {brandItems(props)}
      </div>
    </>
  );
}

export { OrderDrinksComponent };
