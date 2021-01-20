import { connect } from "react-redux";
import { ExternalPaymentsComponent } from "./externalPaymentsComponent";
import { initialise, createPaymentOperation, fetchSummary } from "./duck";

import {
  createPayment,
  fetchPaymentOptions,
  jpSavedCardsConf,
  jpNewCardConf,
  jpUpiConf,
  jpNetBankingConf,
  jpWalletConf,
  resetPaymentOnUnmount,
  placeOrderInProgress,
  placeOrder,
  placeOrderError,
  addNewCard,
  cancelAddNewCard,
  createUPIPayment,
  createCollectRequest,
  takeMeHome,
  resetUPI,
  resetVerifyUPIPaymentOnUnmount,
  verifyUpiPayment,
  updateUpiRemainingTime,
  showUPICancel,
  showUPITimeOut,
} from "../../payment/duck";

const mapStateToProps = (state, props) => {
  return {
    redirect: props.match.params,
    history: props,
    payment: state.payment,
    webPayment: state.webPayments.webPayment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initialise: (ps) => dispatch(initialise(ps)),
    createPaymentOperation: (ps) => dispatch(createPaymentOperation(ps)),
    fetchSummary: (order_id) => dispatch(fetchSummary(order_id)),
    fetchPaymentOptions: (ps) => dispatch(fetchPaymentOptions(ps)),
    createPayment: (ps) => dispatch(createPayment(ps)),
    createUPIPayment: (ps, vpa) => dispatch(createUPIPayment(ps, vpa)),
    createCollectRequest: (ps) => dispatch(createCollectRequest(ps)),
    jpUpiConf: (ps) => dispatch(jpUpiConf(ps)),
    jpSavedCardsConf: (ps, index) => dispatch(jpSavedCardsConf(ps, index)),
    jpNewCardConf: (ps) => dispatch(jpNewCardConf(ps)),
    jpNetBankingConf: (ps, index) => dispatch(jpNetBankingConf(ps, index)),
    jpWalletConf: (ps, index) => dispatch(jpWalletConf(ps, index)),
    resetPaymentOnUnmount: (ps) => dispatch(resetPaymentOnUnmount(ps)),
    resetUPI: (ps) => dispatch(resetUPI(ps)),
    resetVerifyUPIPaymentOnUnmount: (ps) =>
      dispatch(resetVerifyUPIPaymentOnUnmount(ps)),
    verifyUpiPayment: (ps) => dispatch(verifyUpiPayment(ps)),
    updateUpiRemainingTime: () => dispatch(updateUpiRemainingTime()),
    placeOrderInProgress: () => dispatch(placeOrderInProgress()),
    placeOrder: (oid, txn_id) => dispatch(placeOrder(oid, txn_id)),
    placeOrderError: () => dispatch(placeOrderError()),
    showUPITimeOut: (ps, show) => dispatch(showUPITimeOut(ps, show)),
    showUPICancel: (ps, show) => dispatch(showUPICancel(ps, show)),
    addNewCard: () => dispatch(addNewCard()),
    takeMeHome: () => dispatch(takeMeHome()),
    cancelAddNewCard: () => dispatch(cancelAddNewCard()),
  };
};

const ExternalPaymentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExternalPaymentsComponent);

export { ExternalPaymentsContainer };
