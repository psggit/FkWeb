import React, { useState,useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { AddItemComponent } from "./additem";
import UpArrow from "../../../assets/images/up.svg";
import DownArrow from "../../../assets/images/down.svg";
import {increment,decrement} from './actions'

function BrandComponent(props) {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  const { brandList} = props;
  console.log(props,brandList)
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    skuItem: { count },
  } = counter;
  const activeClass = active ? "active" : "inactive";
  return (
    <React.Fragment>
    <div  className={activeClass}>
      <div className="accordionItem" onClick={toggle}>
        <div>
        <img className="thumbnail" src={brandList.logo_low_res_image} alt="" />
        <span className="summary">{brandList.brand_name}</span>
        </div>
        <span className="">
          <img src={active ? UpArrow : DownArrow} alt="upDown Arrow" />
        </span>
      </div>
      {brandList.sku.map((item,index) => (
        <React.Fragment key={index+'sku'}>
        <div className="folding-pannel answer">
          <div>
            <span>{item.volume} ml</span>
            <span> | </span>
            <span>&#x20B9; {item.price}</span>
          </div>
          <AddItemComponent key={index+item.volume} {...props} count={count} increment={() => dispatch(increment())} decrement={() => dispatch(decrement())}/>
        </div>
      </React.Fragment>
      ))}
    </div>
    </React.Fragment>
  )
}



// SkuItemComponent.propTypes = {
//   query: PropTypes.string,
//   getSearchDrinks: PropTypes.func,
//   data:PropTypes.array,
//   pending:PropTypes.bool
// };

export { BrandComponent };
