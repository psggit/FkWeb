import { connect } from "react-redux";
import { SearchComponent } from "./SearchComponent";
import { getSearchDrinks } from "./duck";
import { clearCartAndAdd, dontClearCart } from "../common/cart";

const mapStateToProps = (state) => {
  const {
    searchItem: { data, pending },
    addressStore: { selectedAddress },
  } = state;
  return {
    data,
    selectedAddress,
    pending,
    cartProducts: state.cart.products,
    retailerDiffers: state.cart.retailerDiffers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchDrinks: (query, address, limit, offset) =>
      dispatch(getSearchDrinks(query, address, limit, offset)),
    clearCartAndAdd: () => dispatch(clearCartAndAdd()),
    dontClearCart: () => dispatch(dontClearCart()),
  };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export { SearchContainer };
