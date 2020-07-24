import React, { useState, useEffect } from "react";
import BottomNavigationComponent from "../common/bottomNavigation";
import { SearchBox } from "./SearchBox";
import { HeaderComponent } from "../common/toolbar";
import SearchLayout from "../common/layout/SearchLayout";
import { Accordion } from "../drinks";

function Search() {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const cancelEnable = (val) => {
    SetCancelBtn(val);
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
          <SearchBox cancelEnable={cancelEnable} />
          {cancelBtn ? <button>Cancel</button> : ""}
        </div>
      </HeaderComponent>
      <SearchLayout>
        <Accordion />
        <BottomNavigationComponent />
      </SearchLayout>
    </>
  );
}

export default Search;
