import { connect } from "react-redux";

import { PaymentOptions } from "./PaymentOptions";

import { initialise, fetchPaymentOptions, createOrder } from "./duck";

const mapStateToProps = (state) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    selectedAddress: state.addressStore.selectedAddress,
    payment: state.payment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialise: (ps) => dispatch(initialise(ps)),
    createOrder: (ps) => dispatch(createOrder(ps)),
    fetchPaymentOptions: (ps) => dispatch(fetchPaymentOptions(ps)),
  };
};

const PaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentOptions);

export { PaymentContainer };
