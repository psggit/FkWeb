import {
  placeOrderInProgress,
  placeOrderSuccess,
  placeOrderFailed,
} from "./actions";

import { finalizeOrderAPI } from "../../../utils";
const reqBodyFromState = (paymentState) => {
  return {
    order_id: paymentState.payment.orderDetails.order_id,
    txn_id: paymentState.payment.paymentDetails.order_id,
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
    dispatch(placeOrderSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    console.log(err);
    dispatch(placeOrderFailed(err));
  };
};

const placeOrder = (paymentState, oid) => {
  let reqBody = reqBodyFromState(paymentState);
  return (dispatch) => {
    dispatch(placeOrderInProgress());
    finalizeOrderAPI(
      oid,
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { placeOrder };
