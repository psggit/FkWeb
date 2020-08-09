import {
  verifyPaymentInProgress,
  verifyPaymentSuccess,
  verifyPaymentFailed,
} from "./actions";

import { verifyPaymentAPI } from "../../../utils";
const reqBodyFromState = (paymentState) => {
  return {
    city_id: paymentState.selectedAddress.city.id,
    retailer_id: paymentState.retailer.id,
    state_id: paymentState.selectedAddress.state.id,
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
    dispatch(verifyPaymentSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    console.log(err);
    dispatch(verifyPaymentFailed(err));
  };
};

const verifyPayment = (paymentState, oid) => {
  let reqBody = reqBodyFromState(paymentState);
  return (dispatch) => {
    dispatch(verifyPaymentInProgress());
    verifyPaymentAPI(
      oid,
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { verifyPayment };
