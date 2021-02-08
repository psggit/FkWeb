import { connect } from "react-redux";
import { CartComponent } from "./cartComponent";
import {
  addSkuToCart,
  removeSkuFromCart,
  isEmpty,
  validateCart,
  closeSummaryAlert,
  resetOnUnmount,
  fetchSummary,
} from "../common/cart";
import { resetPromo } from "../voucherCode/duck/action";

const mapStateToProps = (state, props) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    summary: state.cart.summaryDetails,
    retailerDiffers: state.cart.retailerDiffers,
    isEmpty: isEmpty(state.cart),
    fetchSummaryFailed: state.cart.fetchSummaryFailed,
    fetchSummarySuccess: state.cart.fetchSummarySuccess,
    fetchSummaryInProgress: state.cart.fetchSummaryInProgress,
    fetchSummaryError: state.cart.fetchSummaryError,
    fetchSummaryErrorMessage: state.cart.fetchSummaryErrorMessage,
    fetchErrorMessageCount: state.cart.fetchErrorMessageCount,
    selectedAddress: state.addressStore.selectedAddress,
    cartUpdate: state.cart.cartUpdate,
    redirect: props.match.params.redirect,
    promoName:
      state.voucherDetails.searchVoucherData !== null
        ? state.voucherDetails.searchVoucherData.data[0].value
        : null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSKUToCart: (e) => dispatch(addSkuToCart(e)),
    removeSKUFromCart: (e) => dispatch(removeSkuFromCart(e)),
    validateCart: (cs) => dispatch(validateCart(cs)),
    closeSummaryAlert: () => dispatch(closeSummaryAlert()),
    resetOnUnmount: () => dispatch(resetOnUnmount()),
    fetchSummary: (ss) => dispatch(fetchSummary(ss)),
    resetPromo: () => dispatch(resetPromo()),
  };
};

const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartComponent);

export { CartContainer };
