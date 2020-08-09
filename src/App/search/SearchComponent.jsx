import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BottomNavigationContainer } from "../common/bottomNavigation";
import { SearchBox } from "./SearchBox";
import { HeaderComponent } from "../common/toolbar";
import SearchLayout from "../common/layout/SearchLayout";
import { RetailerComponent } from "./retailer";
import { AlertWithOptions } from "../common/alert";

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
        <BottomNavigationContainer />
      </SearchLayout>
    </>
  );
}

SearchComponent.propTypes = {
  getSearchDrinks: PropTypes.func,
  retailerDiffers: PropTypes.bool,
  clearCartAndAdd: PropTypes.func,
  dontClearCart: PropTypes.func,
};
export { SearchComponent };