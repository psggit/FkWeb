import { getMyOrdersAPI } from "../../../utils";
import { getOrderSuccess, getOrderFailed, getOrderInProgress, paginationAction } from "./actions";

const limit = 10

const onSuccess = (dispatch, offset) => {
  return (data) => {
    dispatch(getOrderSuccess(data.data));
    dispatch(paginationAction(offset + limit));
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
    limit: limit,
  };

  return (dispatch) => {
    dispatch(getOrderInProgress());
    getMyOrdersAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch, value.offset),
      onError(dispatch)
    );
  };
};

export { GetMyOrdersOperation };
