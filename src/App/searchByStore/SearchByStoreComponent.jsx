import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchBox } from "../search";
import { ToolbarComponent } from "../common/toolbar";
import { BrandComponent } from "../common/brand";
import SearchLayout from "../common/layout/SearchLayout";
import { LoadingComponent } from "../common/loading";
import { AlertWithOptions } from "../common/alert";

SearchByStoreComponent.propTypes = {
  data: PropTypes.array,
  status: PropTypes.string,
  getSearchByStore: PropTypes.func,
  retailer: PropTypes.object,
  selectedAddress: PropTypes.object,
  retailerDiffers: PropTypes.bool,
  clearCartAndAdd: PropTypes.func,
  dontClearCart: PropTypes.func,
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
