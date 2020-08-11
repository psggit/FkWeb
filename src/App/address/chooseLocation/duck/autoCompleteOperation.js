import {
  autoCompleteAction,
  autoCompleteFailAction,
  autoCompleteInProgressAction,
} from "./actions";

import { autoCompleteLocationAPI } from "../../../../utils";

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(autoCompleteAction(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(autoCompleteFailAction(err));
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

const autoCompleteOperation = (value) => {
  return (dispatch) => {
    dispatch(autoCompleteInProgressAction());
    autoCompleteLocationAPI(
      value,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { autoCompleteOperation };
