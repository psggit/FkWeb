import { connect } from "react-redux";
import { SearchByStoreComponent } from "./SearchByStoreComponent";
import { getSearchByStore } from "./duck";
import { clearCartAndAdd, dontClearCart } from "../common/cart";

const mapStateToProps = (state, props) => {
  console.log(state);
  const {
    searchByStore: { data, status },
    addressStore: { selectedAddress },
  } = state;
  return {
    data,
    status,
    selectedAddress,
    retailer: props.location.state.retailer,
    retailerDiffers: state.cart.retailerDiffers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchByStore: (query, address, retailer) =>
      dispatch(getSearchByStore(query, address, retailer)),
    clearCartAndAdd: () => dispatch(clearCartAndAdd()),
    dontClearCart: () => dispatch(dontClearCart()),
  };
};

const SearchByStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByStoreComponent);

export { SearchByStoreContainer };
