import {
  createPaymentInProgress,
  createPaymentSuccess,
  createPaymentFailed,
} from "./actions";

import { createPaymentAPI } from "../../../utils";
const reqBodyFromState = (paymentState) => {
  let products = [];
  for (let prod of Object.values(paymentState.products)) {
    let p = {
      count: prod.count,
      sku_id: prod.skuId,
    };
    products.push(p);
  }
  return {
    //amount: paymentState.summaryDetails.summaryDetails.total,
    device_type: "fk-web",
    mode: "NB/UPI/card",
    //mode: "card",
    city_id: paymentState.selectedAddress.city.id,
    state_id: paymentState.selectedAddress.state.id,
    retailer_id: paymentState.retailer.id,
    order_id: paymentState.payment.orderDetails.order_id,
    amount: paymentState.payment.orderDetails.balance,
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
    //dispatch(createOrderFailed(data));
    dispatch(createPaymentSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(createPaymentFailed(err));
  };
};

const createPayment = (paymentState) => {
  let reqBody = reqBodyFromState(paymentState);
  return (dispatch) => {
    dispatch(createPaymentInProgress());
    createPaymentAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { createPayment };
