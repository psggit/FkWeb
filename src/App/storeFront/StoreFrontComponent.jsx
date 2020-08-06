import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../common/toolbar";
import SearchLayout from "../common/layout/SearchLayout";
import { BrandContainer} from "../common/brand";
import fssaiImg from "../../assets/images/fssai.png";
import { LoadingComponent } from "../common/loading";
import searchIcon from "../../assets/images/search.svg";
import { useHistory } from "react-router-dom";

StoreFrontComponent.propTypes = {
  getGeners: PropTypes.func,
  getBrands: PropTypes.func,
  brandItems: PropTypes.object,
  generItems: PropTypes.object,
  selectedAddress: PropTypes.object,
  retailer: PropTypes.object,
};

function StoreFrontComponent(props) {
  const history = useHistory();

  const { getGeners, getBrands, brandItems, generItems } = props;
  const [generId, setGenerId] = useState(4);
  useEffect(() => {
    getGeners(props.selectedAddress, props.retailer);
  }, []);

  useEffect(() => {
    getBrands(props.selectedAddress, generId, props.retailer);
  }, [generId]);

  const renderSku = (item) => {
    return (
      <>
        {item.map((item, index) => (
          <BrandContainer
            key={item.brand_id}
            brand={item}
            retailer={props.retailer}
          />
        ))}
        <div className="fssai-img">
          <img src={fssaiImg} alt="fssai" />
        </div>
      </>
    );
  };

  function showSearchStores() {
    history.push({
      pathname: "/searchbystore",
      state: {
        retailer: props.retailer,
      },
    });
  }

  return (
    <>
      <ToolbarComponent title={props.retailer.retailer_name}>
        <div className="dopen-text">{props.retailer.store_info_msg}</div>
        <div
          className="search-container store-search"
          onClick={() => {
            showSearchStores();
          }}
        >
          <div>
            <img className="" src={searchIcon} alt="searchIcon" />
            Search Drinks
          </div>
        </div>
      </ToolbarComponent>
      <SearchLayout custom="custom">
        <div className="storefront-container">
          <div className="horiz-scroll">
            <ul>
              {generItems.data.map((item, index) => (
                <li
                  key={item.id}
                  className={generId === item.id ? "activeBrand" : ""}
                  onClick={() => setGenerId(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="accordion-container mar-zero">
          {brandItems.pending ? (
            <LoadingComponent />
          ) : (
            renderSku(brandItems.data)
          )}
        </div>
      </SearchLayout>
    </>
  );
}

export { StoreFrontComponent };
