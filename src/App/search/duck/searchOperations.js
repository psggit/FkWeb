import {
  getSearchDrinksSuccess,
  getSearchDrinksInProgress,
  getSearchDrinksFailed,
} from "./action";
import { searchDrinkAPI } from "../../../utils";

const reqBodyFromState = (query, address, limit, offset) => {
  return JSON.stringify({
    city_id: address.city.id,
    offset: offset,
    gps: address.gps,
    query: query,
    limit: limit,
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
    dispatch(getSearchDrinksSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getSearchDrinksFailed(err));
  };
};

const getSearchDrinks = (query, address, limit, offset) => {
  let reqBody = reqBodyFromState(query, address, limit, offset);
  return (dispatch) => {
    dispatch(getSearchDrinksInProgress());
    searchDrinkAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { getSearchDrinks };
