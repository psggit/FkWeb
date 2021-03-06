import { connect } from "react-redux";
import { StoreFrontComponent } from "./StoreFrontComponent";
import {
  getGeners,
  getBrands,
  changeGenreAction,
  clearStateAction,
} from "./duck";
import { clearCartAndAdd, dontClearCart } from "../common/cart";

const mapStateToProps = (state, props) => {
  const {
    storeFront: { generItems, brandItems },
    addressStore: { selectedAddress },
  } = state;
  return {
    generItems,
    brandItems,
    selectedAddress,
    cartProducts: state.cart.products,
    retailer: props.location.state.retailer,
    retailerDiffers: state.cart.retailerDiffers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGeners: (address, retailer) => dispatch(getGeners(address, retailer)),
    getBrands: (address, genreId, retailer, limit, offset) =>
      dispatch(getBrands(address, genreId, retailer, limit, offset)),
    clearCartAndAdd: () => dispatch(clearCartAndAdd()),
    setGenre: (genreID) => dispatch(changeGenreAction(genreID)),
    clearState: () => dispatch(clearStateAction()),
    dontClearCart: () => dispatch(dontClearCart()),
  };
};

const StoreFrontContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreFrontComponent);

export { StoreFrontContainer };
