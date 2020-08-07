import { connect } from "react-redux";

import { ProcessPayment } from "./processPayment";

const mapStateToProps = (state) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    selectedAddress: state.addressStore.selectedAddress,
    payment: state.payment,
    summaryDetails: state.summaryDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    intializeJuspay: () => dispatch(),
  };
};

const ProcessPaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProcessPayment);

export { ProcessPaymentContainer };
