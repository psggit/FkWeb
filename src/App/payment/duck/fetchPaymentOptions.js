import {
  fetchPaymentOptionsInProgress,
  fetchPaymentOptionsFailed,
  fetchPaymentOptionsSuccess,
} from "./actions";

import { fetchPaymentOptionsAPI } from "../../../utils";

const reqBodyFromState = (paymentState) => {
  return {
    city_id: paymentState.selectedAddress.city.id,
    state_id: paymentState.selectedAddress.state.id,
    retailer_id: paymentState.retailer.id,
  };
};

const reqBodyFromWeb = (state) => {
  return {
    city_id: state.city_id,
    state_id: state.state_id,
    retailer_id: state.retailer_id,
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
    dispatch(fetchPaymentOptionsSuccess(data));
    //dispatch(fetchPaymentOptionsFailed(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(fetchPaymentOptionsFailed(err));
  };
};

export const fetchPaymentOptions = (paymentState) => {
  console.log("[fetchPaymentOptions]");
  let reqBody = {};
  if (localStorage.getItem("mode") === "web") {
    reqBody = reqBodyFromWeb(paymentState);
  } else {
    reqBody = reqBodyFromState(paymentState);
  }
  console.log("[fetchPaymentOptions]", reqBody);
  return (dispatch) => {
    dispatch(fetchPaymentOptionsInProgress());
    fetchPaymentOptionsAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};
