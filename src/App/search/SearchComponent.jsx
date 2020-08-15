import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BottomNavigationContainer } from "../common/bottomNavigation";
import {
  BottomNextComponent,
  CartContentComponent,
} from "../common/bottomNext";
import { SearchBox } from "./SearchBox";
import { HeaderComponent } from "../common/toolbar";
import SearchLayout from "../common/layout/SearchLayout";
import { RetailerComponent } from "./retailer";
import { AlertWithOptions } from "../common/alert";

function SearchComponent(props) {
  const [cancelBtn, SetCancelBtn] = useState(false);
  const [query, SetQuery] = useState("");
  const { getSearchDrinks, selectedAddress } = props;

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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("focusout", () => {
      SetCancelBtn(false);
    });
  });

  const isFirstRun = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (query.length > 2) {
      getSearchDrinks(query, selectedAddress, 10, 0);
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

  function renderBottomComponent() {
    let totalCartItems = 0;
    let total = 0;
    Object.keys(props.cartProducts).forEach(function (key) {
      total =
        total + props.cartProducts[key].price * props.cartProducts[key].count;
      totalCartItems += props.cartProducts[key].count;
    });
    if (totalCartItems > 0) {
      return (
        <BottomNextComponent
          redirectPath="/cart"
          isNav={true}
          title="View Cart"
        >
          <CartContentComponent
            content={totalCartItems + " ITEMS | ₹ " + total}
          />
        </BottomNextComponent>
      );
    }
  }

  return (
    <>
      <HeaderComponent title="Search Drinks"></HeaderComponent>
      <div className="search-container">
        <SearchBox
          handleInput={handleInput}
          placeholder="Search Drinks"
          onFocusIn={onFocus}
          onFocusOut={onBlur}
        />
        {cancelBtn ? <button>Cancel</button> : ""}
      </div>
      <SearchLayout>
        <RetailerComponent query={query} {...props} />
        {renderBottomComponent()}
        <BottomNavigationContainer />
      </SearchLayout>
    </>
  );
}

SearchComponent.propTypes = {
  getSearchDrinks: PropTypes.func,
  retailerDiffers: PropTypes.bool,
  data: PropTypes.array,
  selectedAddress: PropTypes.object,
  clearCartAndAdd: PropTypes.func,
  cartProducts: PropTypes.object,
  dontClearCart: PropTypes.func,
};
export { SearchComponent };
