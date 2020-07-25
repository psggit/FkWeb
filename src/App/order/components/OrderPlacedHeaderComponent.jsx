import React from "react";
import PropTypes from "prop-types";

OrderPlacedHeaderComponent.propTypes = {
  purchasedOn: PropTypes.string,
  orderID: PropTypes.string,
};

function OrderPlacedHeaderComponent(props) {
  const { purchasedOn, orderID } = props;

  return (
    <>
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
