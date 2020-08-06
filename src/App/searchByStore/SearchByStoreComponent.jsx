import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchBox } from "../search";
import { ToolbarComponent } from "../common/toolbar";
import { BrandComponent } from "../common/brand";
import SearchLayout from "../common/layout/SearchLayout";
import { LoadingComponent } from "../common/loading";

SearchByStoreComponent.propTypes = {
  data: PropTypes.array,
  pending: PropTypes.bool,
  getSearchByStore: PropTypes.func,
  retailer: PropTypes.object,
  selectedAddress: PropTypes.object,
};

function SearchByStoreComponent(props) {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const [query, SetQuery] = useState("");
  const { getSearchByStore, data, pending } = props;

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

  const isFirstRun = useRef(true);

  useEffect(() => {
    //    if (isFirstRun.current) {
    ///    isFirstRun.current = false;
    //  return;
    // }
    if (query.length > 2) {
      getSearchByStore(query, props.selectedAddress, props.retailer);
    }
  }, [query]);

  const renderSku = (brands) => {
    return (
      <>
        {brands.map((brand, index) => (
          <BrandComponent
            key={brand.brand_id}
            brand={brand}
            retailer={props.retailer}
          />
        ))}
      </>
    );
  };

  console.log("data in store" + data);

  return (
    <>
      <ToolbarComponent title="Search Drinks">
        <div className="search-container">
          <SearchBox
            handleInput={handleInput}
            placeholder="Search Drinks"
            onFocusIn={onFocus}
            onFocusOut={onBlur}
          />
          {cancelBtn ? <button>Cancel</button> : ""}
        </div>
      </ToolbarComponent>
      <SearchLayout custom="custom">
        <div className="accordion-container mar-zero">
          {pending ? <LoadingComponent /> : renderSku(data)}
        </div>
      </SearchLayout>
    </>
  );
}

export { SearchByStoreComponent };
