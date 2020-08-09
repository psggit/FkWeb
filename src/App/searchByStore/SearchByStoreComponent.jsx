import React, { useRef, useState, useEffect } from "react";
import {
  BottomNextComponent,
  CartContentComponent,
} from "../common/bottomNext";
import PropTypes from "prop-types";
import { SearchBox } from "../search";
import { ToolbarComponent } from "../common/toolbar";
import { BrandContainer } from "../common/brand";
import SearchLayout from "../common/layout/SearchLayout";
import { LoadingComponent } from "../common/loading";
import { AlertWithOptions } from "../common/alert";

SearchByStoreComponent.propTypes = {
  data: PropTypes.array,
  status: PropTypes.string,
  getSearchByStore: PropTypes.func,
  cartProducts: PropTypes.object,
  retailer: PropTypes.object,
  selectedAddress: PropTypes.object,
  retailerDiffers: PropTypes.bool,
  clearCartAndAdd: PropTypes.func,
  dontClearCart: PropTypes.func,
};

function SearchByStoreComponent(props) {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const [query, SetQuery] = useState("");
  const { getSearchByStore, data, limit, offset, status } = props;

  const onFocus = () => {
    SetCancelBtn(true);
  };

  const onBlur = () => {
    SetCancelBtn(false);
  };

  const handleInput = (val) => {
    SetQuery(val);
  };

  useEffect(() => {
    window.addEventListener("focusout", () => {
      SetCancelBtn(false);
    });
  });

  const isStoreFirstRun = useRef(true);

  useEffect(() => {
    if (isStoreFirstRun.current) {
      isStoreFirstRun.current = false;
      return;
    }
    if (query.length > 2) {
      getSearchByStore(
        query,
        props.selectedAddress,
        props.retailer,
        props.limit,
        0
      );
    }
  }, [query]);

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

  const renderSku = (brands) => {
    return (
      <div>
        {brands.map((brand) => (
          <BrandContainer
            key={brand.brand_id}
            brand={brand}
            retailer={props.retailer}
          />
        ))}
        {brands.length === props.offset + props.limit && (
          <div
            className="loadMore hcenter vcenter flex"
            onClick={() => {
              getSearchByStore(
                query,
                props.selectedAddress,
                props.retailer,
                props.limit,
                props.offset + props.limit
              );
            }}
          >
            {" "}
            Load More
          </div>
        )}
      </div>
    );
  };

  function searchUI() {
    return renderSku(data);
  }
  function SearchWaiting() {
    return (
      <div className="hcenter vcenter flex searchHome">
        <div className="heading">What are you looking for today?</div>
        <div className="subHeading">
          Search for available drinks at <br />
          {props.retailer.retailer_name}.
        </div>
      </div>
    );
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
      <ToolbarComponent title="Search Drinks"></ToolbarComponent>
      <div className="search-container">
        <SearchBox
          handleInput={handleInput}
          placeholder="Search Drinks"
          onFocusIn={onFocus}
          onFocusOut={onBlur}
        />
        {cancelBtn ? <button>Cancel</button> : ""}
      </div>
      <SearchLayout custom="custom">
        {status === "waiting" && SearchWaiting()}
        {status === "progress" && <LoadingComponent />}
        <div id="searchRetailer" className="accordion-container mar-zero">
          {searchUI()}
        </div>
        {renderBottomComponent()}
      </SearchLayout>
    </>
  );
}

export { SearchByStoreComponent };
