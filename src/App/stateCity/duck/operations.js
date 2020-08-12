import { getAvaialableStatesAPI, getAvaialableCitiesAPI } from "../../../utils";
import {
  fetchStateInProgress,
  fetchStateSuccess,
  fetchStateFailed,
  fetchCityInProgress,
  fetchCitySuccess,
  fetchCityFailed,
} from "./actions";

const onStateSuccess = (dispatch) => {
  return (data) => {
    dispatch(fetchStateSuccess(data.data));
  };
};

const onStateError = (dispatch) => {
  return (err) => {
    dispatch(fetchStateFailed(err));
  };
};

const processStateResponse = () => {
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

const GetAvailableStatesOperation = () => {
  return (dispatch) => {
    dispatch(fetchStateInProgress());
    getAvaialableStatesAPI(
      processStateResponse(dispatch),
      onStateSuccess(dispatch),
      onStateError(dispatch)
    );
  };
};

const onCitySuccess = (dispatch) => {
  return (data) => {
    dispatch(fetchCitySuccess(data.data));
  };
};

const onCityError = (dispatch) => {
  return (err) => {
    dispatch(fetchCityFailed(err));
  };
};

const processCityResponse = () => {
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

const GetAvailableCitiesOperation = (value) => {
  var reqBody = {
    state_id: value.state_id,
  };
  return (dispatch) => {
    dispatch(fetchCityInProgress());
    getAvaialableCitiesAPI(
      reqBody,
      processCityResponse(dispatch),
      onCitySuccess(dispatch),
      onCityError(dispatch)
    );
  };
};

export { GetAvailableStatesOperation, GetAvailableCitiesOperation };
