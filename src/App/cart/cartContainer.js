import { connect } from "react-redux";
import { CartComponent } from "./cartComponent";
import { addSkuToCart, removeSkuFromCart } from "../common/cart";

const mapStateToProps = (state) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    retailerDiffers: state.cart.retailerDiffers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSKUToCart: (e) => dispatch(addSkuToCart(e)),
    removeSKUFromCart: (e) => dispatch(removeSkuFromCart(e)),
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent);

export { CartContainer };
