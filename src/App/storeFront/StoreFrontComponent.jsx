import React, { useState, useEffect } from "react";
import BottomNavigationComponent from "../common/bottomNavigation";
import { ToolbarComponent } from "../common/toolbar";
import { SearchBox } from "../search/SearchBox";
import SearchLayout from "../common/layout/SearchLayout";
import { BrandComponent } from "../common/brand";
import fssaiImg from "../../assets/images/fssai.png";
import {LoadingComponent} from '../common/loading'


function StoreFrontComponent(props) {
  const { getGeners,getBrands, brandItems, generItems } = props;
  const [generId, setGenerId] = useState(4);
  useEffect(() => {
    getGeners("gh");
  }, []);

  useEffect(() => {
    getBrands(generId);
  }, [generId]);

  const renderSku = (item) => {
    return (
      <>
        {item.map((item, index) => (
          <BrandComponent key={item.brand_id} brandList={item} />
        ))}
        <div className="fssai-img">
            <img src={fssaiImg} alt="fssai" />
        </div>
      </>
    );
  };
  // if(brandItems.pending){
  //   return  <LoadingComponent />
  // }
  return (
    <>
      <ToolbarComponent title="Kloud Bar">
        <div className="dopen-text">Get Delivery between 12pm-9pm(Today)</div>
        <div className="search-container">
          <SearchBox />
        </div>
      </ToolbarComponent>
      <SearchLayout custom="custom">
        <div className="storefront-container">
          <div className="horiz-scroll">
            <ul>
              {generItems.data.map((item, index) => (
                <li key={index + item.id} className={generId===item.id?"activeBrand":''}onClick={()=>setGenerId(item.id)}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="accordion-container mar-zero">
          {brandItems.pending?<LoadingComponent />:renderSku(brandItems.data)}
        </div>
        <BottomNavigationComponent />
      </SearchLayout>
    </>
  );
}

export { StoreFrontComponent };
