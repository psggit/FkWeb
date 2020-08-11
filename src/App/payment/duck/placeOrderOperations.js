import { placeOrderSuccess, placeOrderFailed } from "./actions";

import { finalizeOrderAPI } from "../../../utils";

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
    dispatch(placeOrderFailed(err));
  };
};

const placeOrder = (oid, txn_id) => {
  return (dispatch) => {
    finalizeOrderAPI(
      { order_id: oid, txn_id: txn_id },
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { placeOrder };
