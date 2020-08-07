import {
  autoCompleteAction,
  autoCompleteFailAction,
  autoCompleteInProgressAction,
} from "./actions";

import { autoCompleteLocationAPI } from "../../../../utils";

const onSuccess = (dispatch) => {
  return (data) => {
    console.log(data);
    dispatch(autoCompleteAction(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    console.log(err);
    dispatch(autoCompleteFailAction(err));
  };
};

const processResponse = () => {
  return (res) => {
    console.log(res);
    if (res.ok) {
      console.log(res);
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
