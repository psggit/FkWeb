import {
  createUPIPaymentInProgress,
  createUPIPaymentFailed,
  createUPIPaymentSuccess,
} from "./actions";

import { createUPIOrderAPI } from "../../../utils";

const reqBodyFromState = (paymentState, vpa) => {
  return {
    //amount: paymentState.summaryDetails.summaryDetails.total,
    device_type: "fk-web",
    amount: paymentState.payment.orderDetails.balance,
    vpa: vpa,
    order_id: paymentState.payment.orderDetails.order_id,
    city_id: paymentState.selectedAddress.city.id,
    state_id: paymentState.selectedAddress.state.id,
    retailer_id: paymentState.retailer.id,
  };
};

const processResponse = () => {
  return (res) => {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 400) {
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(createUPIPaymentSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(createUPIPaymentFailed(err));
  };
};

const createUPIPayment = (paymentState) => {
  let reqBody = reqBodyFromState(paymentState);
  return (dispatch) => {
    dispatch(createUPIPaymentInProgress());
    createUPIOrderAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { createUPIPayment };
