import { connect } from "react-redux";
import { VoucherCode } from "./VoucherCode";
import { fetchAvailableVoucher, searchVoucherCode } from "./duck/operations";
import { resetOnUnmount, resetPromo } from "./duck/action";
import { fetchSummary } from "../common/cart";

const mapStateToProps = (state) => {
  return {
    //products: state.cart,
    products: state.cart.products,
    selectedAddress: state.addressStore.selectedAddress,
    voucherData: state.voucherDetails.availableVoucherList,
    searchVoucherFailed: state.voucherDetails.searchVoucherFailed,
    searchVoucherSuccess: state.voucherDetails.searchVoucherSuccess,
    searchVoucherError: state.voucherDetails.searchVoucherError,
    fetchAvailableVoucherSuccess:
      state.voucherDetails.fetchAvailableVoucherSuccess,
    fetchAvailableVoucherFailed:
      state.voucherDetails.fetchAvailableVoucherFailed,
    fetchSummaryFailed: state.cart.fetchSummaryFailed,
    fetchSummarySuccess: state.cart.fetchSummarySuccess,
    fetchSummaryInProgress: state.cart.fetchSummaryInProgress,
    fetchSummaryError: state.cart.fetchSummaryError,
    fetchSummaryErrorMessage: state.cart.fetchSummaryErrorMessage,
    fetchErrorMessageCount: state.cart.fetchErrorMessageCount,
    retailer: state.cart.retailer,
    summary: state.cart.summaryDetails,
    promoName:
      state.voucherDetails.searchVoucherData !== null
        ? state.voucherDetails.searchVoucherData.data[0].value
        : null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAvailableVoucher: (payload) =>
      dispatch(fetchAvailableVoucher(payload)),
    searchVoucherCode: (payload) => dispatch(searchVoucherCode(payload)),
    resetOnUnmount: () => dispatch(resetOnUnmount()),
    resetPromo: () => dispatch(resetPromo()),
    fetchSummary: (ss) => dispatch(fetchSummary(ss)),
  };
};

const VoucherCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoucherCode);

export default VoucherCodeContainer;
