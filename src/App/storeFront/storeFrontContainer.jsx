import { connect } from "react-redux";
import { StoreFrontComponent } from "./StoreFrontComponent";
import { getGeners,getBrands } from "./duck";

const mapStateToProps = (state) => {
  console.log(state)
  const { storeFront: { generItems, brandItems }} = state;
  return { generItems,brandItems };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGeners: (value) => dispatch(getGeners(value)),
    getBrands: (value) => dispatch(getBrands(value)),
  };
};

const StoreFrontContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreFrontComponent);

export { StoreFrontContainer };