import {
  updateAddressFromGpsAction,
  getAddressFromGpsFailAction,
  getAddressFromGpsInProgressAction,
} from "./actions";

import { getAddressFromGpsAPI } from "../../../utils";

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(updateAddressFromGpsAction(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getAddressFromGpsFailAction(err));
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

const getAddressFromGpsOperation = (value) => {
  return (dispatch) => {
    dispatch(getAddressFromGpsInProgressAction());
    var reqParams = { gps: value.lat + "," + value.lng };
    getAddressFromGpsAPI(
      reqParams,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { getAddressFromGpsOperation };
