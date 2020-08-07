import { connect } from "react-redux";

import { PaymentOptions } from "./PaymentOptions";

import {
  initialise,
  fetchPaymentOptions,
  createOrder,
  createPayment,
  jpSavedCardsConf,
  jpUpiConf,
} from "./duck";

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
    initialise: (ps) => dispatch(initialise(ps)),
    createOrder: (ps) => dispatch(createOrder(ps)),
    fetchPaymentOptions: (ps) => dispatch(fetchPaymentOptions(ps)),
    createPayment: (ps) => dispatch(createPayment(ps)),
    jpSavedCardsConf: (ps) => dispatch(jpSavedCardsConf(ps)),
    jpUpiConf: (ps) => dispatch(jpUpiConf(ps)),
  };
};

const PaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentOptions);

export { PaymentContainer };
