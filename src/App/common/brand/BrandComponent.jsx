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
    <React.Fragment>
      <div className={activeClass}>
        <div className="accordionItem" onClick={toggle}>
          <div>
            <img className="thumbnail" src={brand.logo_low_res_image} alt="" />
            <span className="summary">{brand.brand_name}</span>
            <span className="origin no-fold-text">
              {brand.country_of_origin}
            </span>
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
                <span>&#x20B9; {sku.price}</span>
              </div>
              <AddItemComponent key={i + sku.sku_id} {...props} sku={sku} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
}

export { BrandComponent };
