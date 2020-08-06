import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchBox } from "./SearchBox";
import { ToolbarComponent } from "../common/toolbar";
import { BrandComponent } from "../common/brand";
import SearchLayout from "../common/layout/SearchLayout";
import { LoadingComponent } from "../common/loading";

function SearchByStoreComponent(props) {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const [query, SetQuery] = useState("");
  const { getSearchByStore, data, pending } = props;
  const cancelEnable = (val) => {
    SetCancelBtn(val);
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
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (query.length > 2) {
      getSearchByStore(query);
    }
  }, [query]);
  const renderSku = (item) => {
    return (
      <>
        {item.map((item, index) => (
          <BrandComponent key={item.brand_id} brand={item} />
        ))}
      </>
    );
  };
  return (
    <>
      <ToolbarComponent title="Search Drinks">
        <div className="search-container">
          <SearchBox cancelEnable={cancelEnable} handleInput={handleInput} />
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

SearchByStoreComponent.propTypes = {
  data: PropTypes.array,
  pending: PropTypes.bool,
  getSearchByStore: PropTypes.func,
  retailer: PropTypes.object,
};

export { SearchByStoreComponent };
