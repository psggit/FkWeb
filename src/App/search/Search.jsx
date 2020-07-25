import React, { useState, useEffect } from "react";
import BottomNavigationComponent from "../common/bottomNavigation";
import { SearchBox } from "./SearchBox";
import { HeaderComponent } from "../common/toolbar";
import SearchLayout from "../common/layout/SearchLayout";
import { BrandComponent } from "../common/brand";

function Search() {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const [query, SetQuery] = useState('');
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

  return (
    <>
      <HeaderComponent title="Search Drinks">
        <div className="search-container">
          <SearchBox cancelEnable={cancelEnable} handleInput={handleInput}/>
          {cancelBtn ? <button>Cancel</button> : ""}
        </div>
      </HeaderComponent>
      <SearchLayout>
        <BrandComponent query={query}/>
        <BottomNavigationComponent />
      </SearchLayout>
    </>
  );
}

export default Search;
