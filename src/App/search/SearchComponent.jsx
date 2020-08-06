import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import BottomNavigationComponent from "../common/bottomNavigation";
import { SearchBox } from "./SearchBox";
import { HeaderComponent } from "../common/toolbar";
import SearchLayout from "../common/layout/SearchLayout";
import { RetailerComponent } from "./retailer";

function SearchComponent(props) {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const [query, SetQuery] = useState("");
  const { getSearchDrinks } = props;

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
          <SearchBox
            handleInput={handleInput}
            placeholder="Search Drinks"
            onFocusIn={onFocus}
            onFocusOut={onBlur}
          />
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
SearchComponent.propTypes = {
  getSearchDrinks: PropTypes.func,
};
export { SearchComponent };
