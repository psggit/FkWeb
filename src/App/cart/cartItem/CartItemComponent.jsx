import React from "react";
import PropTypes from "prop-types";

import { drinksIcon } from "../../../assets/images";
import "./style.scss";

CartItemComponent.protoTypes = {
  product: PropTypes.object,
  brandName: PropTypes.string,
  price: PropTypes.number,
  volume: PropTypes.number,
  addItem: PropTypes.function,
  removeItem: PropTypes.function,
  retailer: PropTypes.object,
};

//TODO:@hl05 figure out the icons here!

function getSkuFromProduct(product, retailer) {
  return {
    retailerId: retailer.id,
    retailerName: retailer.name,
    retailerDescription: retailer.description,
    sku_id: product.skuId,
    brand_name: product.brandName,
    logo_low_res_image: product.logoLowResImage,
    brand_id: product.brandId,
    price: product.price,
    volume: product.volume,
    clearCart: false,
  };
}

function CartItemComponent({ product, addItem, removeItem, retailer }) {
  let sku = getSkuFromProduct(product, retailer);
  return (
    <div className="cart-item">
      <img src={drinksIcon} className="cart-image" />
      <div className="cart-content">
        <div>{product.brandName}</div>
        <div className="sub-item">
          <div className="cart-volume">
            {product.volume}ml | Rs {product.price}
          </div>
          <div className="cart-counter">
            <div className="symbol" onClick={removeItem(sku)}>
              -
            </div>
            <div>{product.count}</div>
            <div className="symbol" onClick={addItem(sku)}>
              +
            </div>
          </div>
        </div>
        {!product.available && "item is not avaialable."}
      </div>
    </div>
  );
}

export { CartItemComponent };
