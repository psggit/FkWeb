import { getMyOrdersAPI } from "../../../utils";
import { getOrderSuccess, getOrderFailed, getOrderInProgress } from "./actions";

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(getOrderSuccess(data.data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getOrderFailed(err));
  };
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(getOrderFailed());
      return res.json();
    }
    if (res.status === 400) {
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const GetMyOrdersOperation = (value) => {
  var reqBody = {
    offset: value.offset,
    limit: 10,
  };

  return (dispatch) => {
    dispatch(getOrderInProgress());
    getMyOrdersAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { GetMyOrdersOperation };
