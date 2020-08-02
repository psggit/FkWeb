import { connect } from "react-redux";
import { CartComponent } from "./cartComponent";
import {
  addSkuToCart,
  removeSkuFromCart,
  isEmpty,
  validateCart,
} from "../common/cart";

const mapStateToProps = (state) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    retailerDiffers: state.cart.retailerDiffers,
    isEmpty: isEmpty(state.cart),
    validationFailure: state.cart.validationFailure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSKUToCart: (e) => {
      return () => {
        dispatch(addSkuToCart(e));
      };
    },
    removeSKUFromCart: (e) => {
      return () => dispatch(removeSkuFromCart(e));
    },
    validateCart: (cs) => dispatch(validateCart(cs)),
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent);

export { CartContainer };
