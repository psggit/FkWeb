import {
  getSearchGenresSuccess,
  getSearchGenresInProgress,
  getSearchGenresFailed,
} from "./action";
import { searchGenresAPI } from "../../../utils";

const reqBodyFromState = () => {
  return JSON.stringify({
    city_id: 5,
    gps: "13.011557355101441,80.25409296154976",
    retailer_id: 436,
    state_id: 4,
  });
};

const processResponse = () => {
  return (res) => {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 400) {
      //TODO:@hl05 setup sentry here?
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(getSearchGenresSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getSearchGenresFailed(err));
  };
};

const getGeners = (query) => {
  let reqBody = reqBodyFromState(query);
  return (dispatch) => {
    dispatch(getSearchGenresInProgress());
    searchGenresAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { getGeners };
