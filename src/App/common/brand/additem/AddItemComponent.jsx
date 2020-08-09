import React from "react";
import PropTypes from "prop-types";

function getSkuFromProduct(brand, sku, retailer) {
  return {
    retailerId: retailer.retailer_id,
    retailerName: retailer.retailer_name,
    retailerDescription: retailer.retailer_address,
    sku_id: sku.sku_id,
    brand_name: brand.brand_name,
    logo_low_res_image: brand.logo_low_res_image,
    brand_id: brand.brand_id,
    price: sku.price,
    volume: sku.volume,
    clearCart: false,
  };
}

AddItemComponent.propTypes = {
  cartProducts: PropTypes.object,
  cartRetailer: PropTypes.object,
  retailer: PropTypes.object,
  addSKUToCart: PropTypes.func,
  removeSKUFromCart: PropTypes.func,
  sku: PropTypes.object,
  brand: PropTypes.object,
};

function AddItemComponent(props) {
  const { cartProducts, cartRetailer, retailer, brand, sku } = props;

  function addItem(brand, sku) {
    return () => {
      const skuItem = getSkuFromProduct(brand, sku, retailer);
      props.addSKUToCart(skuItem);
    };
  }

  function removeItem(brand, sku) {
    return () => {
      const skuItem = getSkuFromProduct(brand, sku, retailer);
      props.removeSKUFromCart(skuItem);
    };
  }

  const cartSku = cartProducts[sku.sku_id.toString()];
  if (cartSku === undefined || retailer.retailer_id !== cartRetailer.id) {
    return (
      <div className="cart-counter" onClick={addItem(brand, sku)}>
        ADD
      </div>
    );
  }
  return (
    <div className="cart-content">
      <div className="sub-item">
        <div className="cart-counter">
          <div className="symbol" onClick={removeItem(props.brand, sku)}>
            -
          </div>
          <div className="cart-count">{cartSku.count}</div>
          <div className="symbol" onClick={addItem(brand, sku)}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddItemComponent };
