import { verifyPaymentSuccess, verifyPaymentFailed } from "./actions";

import { verifyPaymentAPI } from "../../../utils";

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
    dispatch(verifyPaymentSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(verifyPaymentFailed(err));
  };
};

const verifyPayment = (oid) => {
  console.info("verifyPayment");
  return (dispatch) => {
    verifyPaymentAPI(
      oid,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { verifyPayment };
