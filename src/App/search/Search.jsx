import React, { useState, useEffect } from "react";
import BottomNavigationComponent from "../common/bottomNavigation";
import SearchBox from "./SearchBox";
// import { HeaderComponent } from "../common/toolbar";
import SearchLayout from "../common/layout/SearchLayout";
import {Accordion} from '../common/drinks'

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
      <div className="search-container">
        <SearchBox cancelEnable={cancelEnable} />
        {cancelBtn ? <button>Cancel</button> : ""}
      </div>
      <SearchLayout>
      <Accordion />
        <BottomNavigationComponent />
      </SearchLayout>
    </>
  );
}

export default Search;
