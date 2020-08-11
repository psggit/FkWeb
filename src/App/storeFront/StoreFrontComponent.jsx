import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ToolbarComponent } from "../common/toolbar";
import {
  BottomNextComponent,
  CartContentComponent,
} from "../common/bottomNext";
import SearchLayout from "../common/layout/SearchLayout";
import { BrandContainer } from "../common/brand";
import { LoadingComponent } from "../common/loading";
import { searchIcon, fssaiIcon } from "../../assets/images";
import { useHistory } from "react-router-dom";
import { AlertWithOptions } from "../common/alert";

StoreFrontComponent.propTypes = {
  getGeners: PropTypes.func,
  getBrands: PropTypes.func,
  brandItems: PropTypes.object,
  generItems: PropTypes.object,
  cartProducts: PropTypes.object,
  selectedAddress: PropTypes.object,
  retailer: PropTypes.object,
  retailerDiffers: PropTypes.bool,
  clearCartAndAdd: PropTypes.func,
  dontClearCart: PropTypes.func,
  setGenre: PropTypes.func,
  clearState: PropTypes.func,
};

function StoreFrontComponent(props) {
  const history = useHistory();

  const {
    getGeners,
    getBrands,
    setGenre,
    brandItems,
    generItems,
    clearState,
  } = props;
  const generId = generItems.selectedGenre;
  const limit = 10;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getGeners(props.selectedAddress, props.retailer);
    return () => {
      clearState();
    };
  }, []);

  useEffect(() => {
    if (generId != undefined) {
      if (offset === 0) {
        getBrands(
          props.selectedAddress,
          generId,
          props.retailer,
          limit,
          offset
        );
      } else {
        setOffset(0);
      }
      document.getElementById("brand_accordion").scroll(0, 0);
    }
  }, [generId]);

  useEffect(() => {
    if (generId != undefined) {
      getBrands(props.selectedAddress, generId, props.retailer, limit, offset);
    }
  }, [offset]);

  if (props.retailerDiffers) {
    return (
      <AlertWithOptions
        title={"Items already in cart"}
        content={
          "You can clear the cart & add items from another store or cancel and keep the current items"
        }
        option1={"CLEAR CART"}
        option2={"CANCEL"}
        handleOption1={props.clearCartAndAdd}
        handleOption2={props.dontClearCart}
      />
    );
  }

  const renderSku = (item) => {
    return (
      <>
        {item.map((i, index) => (
          <BrandContainer
            key={i.brand_id}
            brand={i}
            retailer={props.retailer}
          />
        ))}
        {item.length >= offset && item.length !== 0 && (
          <div
            className="flex hcenter vcenter loadMore"
            onClick={() => {
              setOffset(offset + limit);
            }}
          >
            Load more...
          </div>
        )}
        <div className="fssai-container">
          <img src={fssaiIcon} alt="fssai" className="fssai-img" />
          <div className="fssai-license-container">
            <div className="fssai-license">License No:</div>
            <div className="fssai-license-no">
              {props.retailer.fssai_no ? props.retailer.fssai_no : " -"}
            </div>
          </div>
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

  function renderBottomComponent() {
    let totalCartItems = 0;
    let total = 0;
    Object.keys(props.cartProducts).forEach(function (key) {
      total =
        total + props.cartProducts[key].price * props.cartProducts[key].count;
      totalCartItems += props.cartProducts[key].count;
    });
    if (totalCartItems > 0) {
      return (
        <BottomNextComponent redirectPath="/cart" title="View Cart">
          <CartContentComponent
            content={totalCartItems + " ITEMS | ₹ " + total}
          />
        </BottomNextComponent>
      );
    }
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
                  onClick={() => setGenre(item.id)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="brand_accordion" className="accordion-container mar-zero">
          {generItems.status === "waiting" ||
          generItems.status === "inProgress" ? (
            <LoadingComponent />
          ) : (
            (brandItems.status === "waiting" ||
              brandItems.status === "inProgress") && <LoadingComponent />
          )}
          {renderSku(brandItems.data)}
        </div>
        {renderBottomComponent()}
      </SearchLayout>
    </>
  );
}

export { StoreFrontComponent };
