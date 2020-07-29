import React, {useRef, useState, useEffect } from "react";
import BottomNavigationComponent from "../common/bottomNavigation";
import { SearchBox } from "./SearchBox";
import { HeaderComponent } from "../common/toolbar";
import SearchLayout from "../common/layout/SearchLayout";
import { RetailerComponent } from "./retailer";

function SearchComponent(props) {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const [query, SetQuery] = useState("");
  const {getSearchDrinks}=props;
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
      getSearchDrinks(query);
    }
  }, [query]);

  return (
    <>
      <HeaderComponent title="Search Drinks">
        <div className="search-container">
          <SearchBox cancelEnable={cancelEnable} handleInput={handleInput} />
          {cancelBtn ? <button>Cancel</button> : ""}
        </div>
      </HeaderComponent>
      <SearchLayout>
        <RetailerComponent query={query} {...props} />
        <BottomNavigationComponent />
      </SearchLayout>
    </>
  );
}

export { SearchComponent };
