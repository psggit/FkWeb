import { connect } from "react-redux";
import { OrderSummary } from "./OrderSummary";
import { fetchSummary } from "./duck";

const mapStateToProps = (state) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    summary: state.summaryDetails,
    selectedAddress: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSummary: (ss) => dispatch(fetchSummary(ss)),
  };
};

const OrderSummaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);

export { OrderSummaryContainer };
