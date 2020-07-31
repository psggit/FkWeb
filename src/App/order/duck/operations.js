import { getOrdersDetailAPI } from "../../../utils";
import {
  getOrderDetailSuccess,
  getOrderDetailFailed,
  getOrderDetailInProgress,
} from "./actions";

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(getOrderDetailSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getOrderDetailFailed(err));
    alert(err);
  };
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(getOrderDetailFailed());
      return res.json();
    }
    if (res.status === 400) {
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const OrderDetailOperation = (value) => {
  var reqPath = value.orderType + "/" + value.orderID;

  return (dispatch) => {
    dispatch(getOrderDetailInProgress());
    getOrdersDetailAPI(
      reqPath,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { OrderDetailOperation };
