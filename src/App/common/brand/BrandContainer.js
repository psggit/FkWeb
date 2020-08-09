import { connect } from "react-redux";
import { BrandComponent } from "./BrandComponent";

import { addSkuToCart, removeSkuFromCart } from "../cart";

const mapStateToProps = (state, props) => {
  return {
    retailer: props.retailer,
    cartRetailer: state.cart.retailer,
    cartProducts: state.cart.products,
    brand: props.brand,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSKUToCart: (e) => dispatch(addSkuToCart(e)),
    removeSKUFromCart: (e) => dispatch(removeSkuFromCart(e)),
  };
};

const BrandContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandComponent);

export { BrandContainer };
