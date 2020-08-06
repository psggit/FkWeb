import { connect } from "react-redux";
import { StoreFrontComponent } from "./StoreFrontComponent";
import { getGeners, getBrands } from "./duck";

const mapStateToProps = (state, props) => {
  console.log(state);
  const {
    storeFront: { generItems, brandItems },
    addressStore: { selectedAddress },
  } = state;
  return {
    generItems,
    brandItems,
    selectedAddress,
    retailer: props.location.state.retailer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGeners: (address, retailer) => dispatch(getGeners(address, retailer)),
    getBrands: (address, genreId, retailer) =>
      dispatch(getBrands(address, genreId, retailer)),
  };
};

const StoreFrontContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreFrontComponent);

export { StoreFrontContainer };

