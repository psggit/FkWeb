import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchBox } from "../search";
import { ToolbarComponent } from "../common/toolbar";
import { BrandComponent } from "../common/brand";
import SearchLayout from "../common/layout/SearchLayout";
import { LoadingComponent } from "../common/loading";

SearchByStoreComponent.propTypes = {
  data: PropTypes.array,
  status: PropTypes.string,
  getSearchByStore: PropTypes.func,
  retailer: PropTypes.object,
  selectedAddress: PropTypes.object,
};

function SearchByStoreComponent(props) {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const [query, SetQuery] = useState("");
  const { getSearchByStore, data, status } = props;

  const onFocus = () => {
    SetCancelBtn(true);
  };

  const onBlur = () => {
    SetCancelBtn(false);
  };

  const handleInput = (val) => {
    console.log("query", val);
    SetQuery(val);
  };

  useEffect(() => {
    console.log("use effect 1");
    window.addEventListener("focusout", () => {
      console.log("use effect 1 focusout event");
      SetCancelBtn(false);
    });
  });

  const isFirstRun = useRef(true);

  useEffect(() => {
    console.log("use effect 2");
    if (isFirstRun.current) {
      console.log("use effect isFirstRun", isFirstRun);
      isFirstRun.current = false;
      return;
    }
    if (query.length > 2) {
      console.log("use effect query", query);

      getSearchByStore(query, props.selectedAddress, props.retailer);
    }
  }, [query]);

  const renderSku = (brands) => {
    console.log("brand rendering is called");
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
  console.log("data in store" + data + status);

  function searchUI() {
    if (status == "waiting" || status == "failed") {
      return <div />;
    } else if (status == "progress") {
      return <LoadingComponent />;
    } else if (status == "success") {
      return renderSku(data);
    }
  }

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
        <div className="accordion-container mar-zero">{searchUI()}</div>
      </SearchLayout>
    </>
  );
}

export { SearchByStoreComponent };
