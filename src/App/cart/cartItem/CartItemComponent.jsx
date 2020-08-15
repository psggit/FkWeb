import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

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

CartItemComponent.propTypes = {
  product: PropTypes.object,
  brandName: PropTypes.string,
  price: PropTypes.number,
  volume: PropTypes.number,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  retailer: PropTypes.object,
};

function CartItemComponent(props) {
  const { product, retailer, removeItem, addItem } = props;
  let sku = getSkuFromProduct(product, retailer);
  let price = product.price.toString();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={props.product.image} className="cart-image" />
        <div className="cart-content">
          <div className="cart-brand-name">{product.brandName}</div>
          <div className="sub-item">
            <div className="cart-volume">
              {product.volume}ml | &#x20B9; {price}
            </div>
            <div className="cart-counter">
              <div className="symbol" onClick={() => removeItem(sku)}>
                -
              </div>
              <div>{product.count}</div>
              <div className="symbol" onClick={() => addItem(sku)}>
                +
              </div>
            </div>
          </div>
        </div>
      </div>
      {!product.available && (
        <div className="not-available">
          Item not available. Please remove from cart.
        </div>
      )}
    </div>
  );
}
export { CartItemComponent };
