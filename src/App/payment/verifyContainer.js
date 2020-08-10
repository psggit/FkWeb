import { connect } from "react-redux";

import { VerifyComponent } from "./verifyComponent";
import {
  verifyPayment,
  placeOrder,
  verifyPaymentInProgress,
  verifyPaymentError,
  placeOrderInProgress,
  placeOrderError,
  takeMeHome,
  tryPayingAgain,
  resetVerifyPaymentOnUnmount,
} from "./duck";

const mapStateToProps = (state) => {
  return {
    payment: state.payment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyPayment: (txn_id) => dispatch(verifyPayment(txn_id)),
    placeOrder: (oid, txn_id) => dispatch(placeOrder(oid, txn_id)),
    verifyPaymentInProgress: () => dispatch(verifyPaymentInProgress()),
    verifyPaymentError: () => dispatch(verifyPaymentError()),
    placeOrderInProgress: () => dispatch(placeOrderInProgress()),
    placeOrderError: () => dispatch(placeOrderError()),
    tryPayingAgain: () => dispatch(tryPayingAgain()),
    takeMeHome: () => dispatch(takeMeHome()),
    resetVerifyPaymentOnUnmount: () => dispatch(resetVerifyPaymentOnUnmount()),
  };
};

const PaymentVerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyComponent);

export { PaymentVerifyContainer };
