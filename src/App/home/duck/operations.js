import { getCurrentOrderAPI } from "../../../utils";
import { getCurrentOrderSuccess, getCurrentOrderFailed } from "./actions";

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(getCurrentOrderSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getCurrentOrderFailed(err));
  };
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(getCurrentOrderFailed());
      return res.json();
    }
    if (res.status === 400) {
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const GetCurrentOrdersOperation = () => {
  return (dispatch) => {
    getCurrentOrderAPI(
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { GetCurrentOrdersOperation };
