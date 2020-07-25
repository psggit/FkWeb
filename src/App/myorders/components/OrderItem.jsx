import React from "react";
import PropTypes from "prop-types";

OrderItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  date: PropTypes.string,
  retailerName: PropTypes.string,
  onClick: PropTypes.func,
};

function OrderItem(props) {
  const { title, amount, date, retailerName, onClick } = props;

  return (
    <div className="order-item" onClick={onClick}>
      <div className="order-item-header">
        <div className="item-display-title">{title}</div>
        <div className="item-display-total">{amount}</div>
      </div>
      <div className="item-date">{date}</div>
      <div className="retailer-name">{retailerName}</div>
    </div>
  );
}

export { OrderItem };
