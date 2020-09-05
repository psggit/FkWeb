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
  jpWalletConf,
  resetPaymentOnUnmount,
  placeOrderInProgress,
  placeOrder,
  addNewCard,
  cancelAddNewCard,
  createUPIPayment,
  createCollectRequest,
  resetUPI,
  resetVerifyUPIPaymentOnUnmount,
  verifyUpiPayment,
  updateUpiRemainingTime,
  showUPICancel,
  showUPITimeOut,
} from "./duck";

const mapStateToProps = (state) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    selectedAddress: state.addressStore.selectedAddress,
    payment: state.payment,
    //summaryDetails: state.summaryDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialise: (ps) => dispatch(initialise(ps)),
    createOrder: (ps) => dispatch(createOrder(ps)),
    fetchPaymentOptions: (ps) => dispatch(fetchPaymentOptions(ps)),
    createPayment: (ps) => dispatch(createPayment(ps)),
    createUPIPayment: (ps, vpa) => dispatch(createUPIPayment(ps, vpa)),
    createCollectRequest: (ps) => dispatch(createCollectRequest(ps)),
    jpUpiConf: (ps) => dispatch(jpUpiConf(ps)),
    jpSavedCardsConf: (ps, index) => dispatch(jpSavedCardsConf(ps, index)),
    jpNewCardConf: (ps) => dispatch(jpNewCardConf(ps)),
    jpNetBankingConf: (ps) => dispatch(jpNetBankingConf(ps)),
    jpWalletConf: (ps) => dispatch(jpWalletConf(ps)),
    resetPaymentOnUnmount: (ps) => dispatch(resetPaymentOnUnmount(ps)),
    resetUPI: (ps) => dispatch(resetUPI(ps)),
    resetVerifyUPIPaymentOnUnmount: (ps) =>
      dispatch(resetVerifyUPIPaymentOnUnmount(ps)),
    verifyUpiPayment: (ps) => dispatch(verifyUpiPayment(ps)),
    updateUpiRemainingTime: () => dispatch(updateUpiRemainingTime()),
    placeOrderInProgress: () => dispatch(placeOrderInProgress()),
    placeOrder: (oid, txn_id) => dispatch(placeOrder(oid, txn_id)),
    showUPITimeOut: (ps, show) => dispatch(showUPITimeOut(ps, show)),
    showUPICancel: (ps, show) => dispatch(showUPICancel(ps, show)),
    addNewCard: () => dispatch(addNewCard()),
    cancelAddNewCard: () => dispatch(cancelAddNewCard()),
  };
};

const PaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentOptions);

export { PaymentContainer };
