import React from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { AddMoreComponent } from "../addMore";

CartHeaderComponent.propTypes = {
  retailer: PropTypes.object,
};

function CartHeaderComponent(props) {
  return (
    <div className="cart-header">
      <div className="purchasing-from">PURCHASING FROM</div>
      <div className="cart-sub-header">
        <div className="retailer-name">{props.retailer.name}</div>
        <AddMoreComponent retailer={props.retailer} />
      </div>
    </div>
  );
}

export { CartHeaderComponent };
