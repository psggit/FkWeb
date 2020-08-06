import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { AddItemComponent } from "./additem";
import UpArrow from "../../../assets/images/up.svg";
import DownArrow from "../../../assets/images/down.svg";

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
    clearCart: true,
  };
}

BrandComponent.propTypes = {
  retailer: PropTypes.object,
  cartRetailer: PropTypes.object,
  cartProducts: PropTypes.object,
  brand: PropTypes.object,
  retailerDiffers: PropTypes.bool,
  addSKUToCart: PropTypes.func,
  removeSKUFromCart: PropTypes.func,
};

function BrandComponent(props) {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  const { brand, retailer } = props;
  const counter = useSelector((state) => state);
  const {
    skuItem: { count },
  } = counter;

  const activeClass = active ? "active" : "inactive";

  function addItem(brand, sku) {
    const skuItem = getSkuFromProduct(brand, sku, retailer);
    props.addSKUToCart(skuItem);
  }

  function removeItem(brand, sku) {
    const skuItem = getSkuFromProduct(brand, sku, retailer);
    props.removeSKUFromCart(skuItem);
  }

  return (
    <React.Fragment>
      <div className={activeClass}>
        <div className="accordionItem" onClick={toggle}>
          <div>
            <img className="thumbnail" src={brand.logo_low_res_image} alt="" />
            <span className="summary">{brand.brand_name}</span>
          </div>
          <span className="">
            <img src={active ? UpArrow : DownArrow} alt="upDown Arrow" />
          </span>
        </div>
        {brand.sku.map((item, index) => (
          <React.Fragment key={item.sku_id}>
            <div className="folding-pannel answer">
              <div>
                <span>{item.volume} ml</span>
                <span> | </span>
                <span>&#x20B9; {item.price}</span>
              </div>
              <AddItemComponent
                key={index + item.sku_id + item.volume}
                {...props}
                count={count}
                increment={() => {
                  addItem(brand, item);
                }}
                decrement={() => {
                  removeItem(brand, item);
                }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}

// SkuItemComponent.propTypes = {
//   query: PropTypes.string,
//   getSearchDrinks: PropTypes.func,
//   data:PropTypes.array,
//   pending:PropTypes.bool
// };

export { BrandComponent };
