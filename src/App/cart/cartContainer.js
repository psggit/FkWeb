import { connect } from "react-redux";
import { CartComponent } from "./cartComponent";
import {
  addSkuToCart,
  removeSkuFromCart,
  isEmpty,
  validateCart,
  closeValidationErrorMessage,
  resetOnUnmount,
  fetchSummary,
} from "../common/cart";

const mapStateToProps = (state) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    summary: state.summaryDetails,
    retailerDiffers: state.cart.retailerDiffers,
    isEmpty: isEmpty(state.cart),
    validationInProgress: state.cart.validationInProgress,
    validationFailure: state.cart.validationFailure,
    validateError: state.cart.validateError,
    validateErrorMessage: state.cart.validateErrorMessage,
    validationSuccessful: state.cart.validationSuccessful,
    selectedAddress: state.addressStore.selectedAddress,
    cartUpdate: state.cart.cartUpdate,
    redirect: props.match.params.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSKUToCart: (e) => dispatch(addSkuToCart(e)),
    removeSKUFromCart: (e) => dispatch(removeSkuFromCart(e)),
    validateCart: (cs) => dispatch(validateCart(cs)),
    closeValidationErrorMessage: () => dispatch(closeValidationErrorMessage()),
    resetOnUnmount: () => dispatch(resetOnUnmount()),
    fetchSummary: (ss) => dispatch(fetchSummary(ss)),
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent);

export { CartContainer };
