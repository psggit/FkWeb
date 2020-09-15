import {
  createCollectRequestSuccess,
  createCollectRequestInProgress,
  createCollectRequestFailed,
} from "./actions";

import { createCollectRequestAPI } from "../../../utils";

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
    dispatch(createCollectRequestSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(createCollectRequestFailed(err));
  };
};

const createCollectRequest = (orderID) => {
  return (dispatch) => {
    dispatch(createCollectRequestInProgress());
    createCollectRequestAPI(
      orderID,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { createCollectRequest };
