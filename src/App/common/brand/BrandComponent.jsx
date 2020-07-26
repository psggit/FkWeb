import React, { useState,useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { AddItemComponent } from "./additem";
import UpArrow from "../../../assets/images/up.svg";
import DownArrow from "../../../assets/images/down.svg";
import {LoadingComponent} from '../loading'


function SkuItem(props) {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  const { brandList} = props;
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
          <AddItemComponent key={index+item.volume} {...props} />
        </div>
      </React.Fragment>
      ))}
    </div>
    </React.Fragment>
  )
}

function BrandComponent(props) {
  const { query,data,pending ,getSearchDrinks}=props;
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if(query.length >2){
      getSearchDrinks(query);
    }
  }, [query]);
  const renderQuestion = (item) => {
    return (
      <>
        {item.brands.map((item, index) => (
          <SkuItem key={index+'key'}  brandList={item} />
        ))}
      </>
    );
  };
  if(pending){
    return  <LoadingComponent />
  }
  if(query.length <=2 ){
    return(<div className="initial-text">
    <div>What are you looking for today?</div>
    <div className="mid-light-text">We'tell you where it's available !</div>
  </div>)
  }
  return (
    <>
      {data.length ? (
        <div className="accordion-container">
          {data.map((item, index) => <React.Fragment key={index+'s'}>
          <div className="accordion-title">
          <span> </span>
            <div key={item.retailer_name}>{item.retailer_name}</div>
          </div>
          {renderQuestion(item)}</React.Fragment>)}
        </div>
      ) : ( 
        <div className="initial-text">
          <div>Sorry! </div>
          <div className="sorry-text" style={{width:'100%',margin:0,padding:'5px 20px'}}>The drink you searched for isn't available at a store near you right now</div>
        </div>       
      )}
    </>
  );
}

BrandComponent.propTypes = {
  query: PropTypes.string,
  getSearchDrinks: PropTypes.func,
  data:PropTypes.array,
  pending:PropTypes.bool
};

export { BrandComponent };
