import {
  verifyPaymentFailure,
  verifyPaymentProgress,
  verifyPaymentSuccess,
} from "./actions";
import { verifyWebPaymentAPI } from "../../../../utils/";

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
  console.log("onSuccess --- webpayment");
  return (res) => {
    dispatch(verifyPaymentSuccess(res));
  };
};

const onError = (dispatch) => {
  console.log("onError --- webpayment");
  return (res) => {
    dispatch(verifyPaymentFailure(res));
  };
};

const verifyPaymentOperation = (reqBody) => {
  return (dispatch) => {
    dispatch(verifyPaymentProgress());
    verifyWebPaymentAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { verifyPaymentOperation };
