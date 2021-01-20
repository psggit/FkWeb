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

const reqBodyFromWeb = (state, vpa) => {
  // console.log("state ", state);
  let paymentState = state.webPayment.summaryDetails;
  let orderId = paymentState.order_id.substr(
    0,
    paymentState.order_id.length - 2
  );
  return {
    device_type: "web",
    amount: paymentState.amount,
    vpa: vpa,
    order_id: orderId,
    city_id: paymentState.city_id,
    state_id: paymentState.state_id,
    retailer_id: paymentState.retailer_id,
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

const createUPIPayment = (paymentState, vpa) => {
  // let reqBody = reqBodyFromState(paymentState, vpa);
  console.log("[createUPIPayment]");
  let reqBody = {};
  if (localStorage.getItem("mode") === "web") {
    reqBody = reqBodyFromWeb(paymentState, vpa);
  } else {
    reqBody = reqBodyFromState(paymentState, vpa);
  }
  console.log("[createUPIPayment] ", reqBody);
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
