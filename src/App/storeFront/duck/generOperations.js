import {
  getSearchGenresSuccess,
  getSearchGenresInProgress,
  getSearchGenresFailed,
} from "./action";
import { searchGenresAPI } from "../../../utils";

const reqBodyFromState = (address, retailer) => {
  return JSON.stringify({
    city_id: address.city.id,
    gps: address.gps,
    retailer_id: retailer.retailer_id,
    state_id: address.state.id,
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

const getGeners = (address, retailer) => {
  let reqBody = reqBodyFromState(address, retailer);
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
