import { connect } from "react-redux";
import { SearchByStoreComponent } from "./SearchByStoreComponent";
import { getSearchByStore, resetData } from "./duck";
import { clearCartAndAdd, dontClearCart } from "../common/cart";

const mapStateToProps = (state, props) => {
  const {
    searchByStore: { data, status, limit, offset },
    addressStore: { selectedAddress },
  } = state;
  return {
    data,
    status,
    limit,
    offset,
    selectedAddress,
    cartProducts: state.cart.products,
    retailer: props.location.state.retailer,
    retailerDiffers: state.cart.retailerDiffers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchByStore: (query, address, retailer, limit, offset) =>
      dispatch(getSearchByStore(query, address, retailer, limit, offset)),
    clearCartAndAdd: () => dispatch(clearCartAndAdd()),
    dontClearCart: () => dispatch(dontClearCart()),
    resetData: () => dispatch(resetData()),
  };
};

const SearchByStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByStoreComponent);

export { SearchByStoreContainer };
