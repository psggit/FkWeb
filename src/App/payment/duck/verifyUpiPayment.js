import { verifyUpiPaymentSuccess, verifyUpiPaymentFailed } from "./actions";

import { verifyUpiPaymentAPI } from "../../../utils";

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
    dispatch(verifyUpiPaymentSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(verifyUpiPaymentFailed(err));
  };
};

const verifyUpiPayment = (oid) => {
  return (dispatch) => {
    verifyUpiPaymentAPI(
      oid,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { verifyUpiPayment };
