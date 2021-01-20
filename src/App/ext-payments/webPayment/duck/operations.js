import { fetchPaymentOptions, createPayment } from "../../../payment/duck";
import { webPaymentAmtDetailsAPI } from "../../../../utils/";
import {
  fetchOrderSummaryProgress,
  fetchOrderSummarySuccess,
  fetchOrderSummaryFailure,
} from "./actions";

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
    dispatch(fetchOrderSummarySuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(fetchOrderSummaryFailure(err));
  };
};

const initialise = (ps) => {
  console.log("calling from initialise");
  return (dispatch) => {
    dispatch(fetchPaymentOptions(ps));
  };
};

const createPaymentOperation = (ps) => {
  console.log("calling from createPayment");
  return (dispatch) => {
    dispatch(createPayment(ps));
  };
};

const fetchSummary = (reqBody) => {
  console.log("operaitons- fetchSummary");
  return (dispatch) => {
    dispatch(fetchOrderSummaryProgress());
    webPaymentAmtDetailsAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { initialise, createPaymentOperation, fetchSummary };
