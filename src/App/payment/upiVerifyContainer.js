import { connect } from "react-redux";
import { UPIVerifyComponent } from "./UPIVerifyComponent";

import {
  resetUPI,
  resetVerifyUPIPaymentOnUnmount,
  verifyUpiPayment,
  updateUpiRemainingTime,
  placeOrder,
  placeOrderError,
  placeOrderInProgress,
  showUPITimeOut,
  showUPICancel,
  takeMeHome,
} from "./duck";

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
    resetUPI: (ps) => dispatch(resetUPI(ps)),
    resetVerifyUPIPaymentOnUnmount: (ps) =>
      dispatch(resetVerifyUPIPaymentOnUnmount(ps)),
    verifyUpiPayment: (ps) => dispatch(verifyUpiPayment(ps)),
    updateUpiRemainingTime: () => dispatch(updateUpiRemainingTime()),
    placeOrder: (oid, txn_id) => dispatch(placeOrder(oid, txn_id)),
    placeOrderInProgress: () => dispatch(placeOrderInProgress()),
    placeOrderError: () => dispatch(placeOrderError()),
    showUPITimeOut: (ps, show) => dispatch(showUPITimeOut(ps, show)),
    showUPICancel: (ps, show) => dispatch(showUPICancel(ps, show)),
    takeMeHome: () => dispatch(takeMeHome()),
  };
};

const UPIVerifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UPIVerifyComponent);

export { UPIVerifyContainer };
