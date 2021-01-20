import { connect } from "react-redux";
import { verifyPaymentOperation } from "../verifyWebPayment/duck/operations";
import { PaymentStatusComponent } from "./paymentStatusComponent";

const mapStateToProps = (state) => {
  return {
    verifyPayment: state.webPayments.verifyPayment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyWebPayment: (reqBody) => dispatch(verifyPaymentOperation(reqBody)),
  };
};

const PaymentStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentStatusComponent);

export { PaymentStatusContainer };
