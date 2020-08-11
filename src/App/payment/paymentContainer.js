import { connect } from "react-redux";

import { PaymentOptions } from "./PaymentOptions";

import {
  initialise,
  fetchPaymentOptions,
  createOrder,
  createPayment,
  jpSavedCardsConf,
  jpNewCardConf,
  jpUpiConf,
  jpNetBankingConf,
  resetPaymentOnUnmount,
  addNewCard,
  cancelAddNewCard,
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
    jpUpiConf: (ps) => dispatch(jpUpiConf(ps)),
    jpSavedCardsConf: (ps, index) => dispatch(jpSavedCardsConf(ps, index)),
    jpNewCardConf: (ps) => dispatch(jpNewCardConf(ps)),
    jpNetBankingConf: (ps) => dispatch(jpNetBankingConf(ps)),
    resetPaymentOnUnmount: (ps) => dispatch(resetPaymentOnUnmount(ps)),
    addNewCard: () => dispatch(addNewCard()),
    cancelAddNewCard: () => dispatch(cancelAddNewCard()),
  };
};

const PaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentOptions);

export { PaymentContainer };
