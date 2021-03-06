import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddItemComponent } from "./additem";
import UpArrow from "../../../assets/images/up.svg";
import DownArrow from "../../../assets/images/down.svg";
import { AlertWithOptions } from "../alert";

BrandComponent.propTypes = {
  retailer: PropTypes.object,
  cartRetailer: PropTypes.object,
  cartProducts: PropTypes.object,
  brand: PropTypes.object,
  addSKUToCart: PropTypes.func,
  removeSKUFromCart: PropTypes.func,
};

function BrandComponent(props) {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  const { brand } = props;

  const activeClass = active ? "active" : "inactive";
  return (
    <>
      <div className={activeClass}>
        <div className="accordionItem" onClick={toggle}>
          <div className="sku-item">
            <img className="thumbnail" src={brand.logo_low_res_image} alt="" />
            <div className="sku-content-container">
              <div className="summary line-clamp">{brand.brand_name}</div>
              <div className="origin no-fold-text">
                {brand.country_of_origin}
              </div>
            </div>
          </div>
          <span className="">
            <img src={active ? UpArrow : DownArrow} alt="upDown Arrow" />
          </span>
        </div>
        {brand.sku.map((sku, i) => (
          <React.Fragment key={sku.sku_id}>
            <div className="folding-pannel answer">
              <div>
                <span>{sku.volume} ml</span>
                <span> | </span>
                <span>&#x20B9; {sku.price.toString()}</span>
              </div>
              <AddItemComponent key={i + sku.sku_id} {...props} sku={sku} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

//.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
export { BrandComponent };
