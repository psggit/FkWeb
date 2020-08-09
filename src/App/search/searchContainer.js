import { connect } from "react-redux";
import { SearchComponent } from "./SearchComponent";
import { getSearchDrinks } from "./duck";
import { clearCartAndAdd, dontClearCart } from "../common/cart";

const mapStateToProps = (state) => {
  const {
    searchItem: { data, pending },
  } = state;
  return { data, pending, retailerDiffers: state.cart.retailerDiffers };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchDrinks: (value) => dispatch(getSearchDrinks(value)),
    clearCartAndAdd: () => dispatch(clearCartAndAdd()),
    dontClearCart: () => dispatch(dontClearCart()),
  };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export { SearchContainer };
