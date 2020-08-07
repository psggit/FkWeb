import {
  getSearchByStoreSuccess,
  getSearchByStoreInProgress,
  getSearchByStoreFailed,
} from "./action";
import { searchByStoreAPI } from "../../../utils";

const reqBodyFromState = (query, address, retailer) => {
  return JSON.stringify({
    city_id: address.city.id,
    lat_lng: address.gps,
    limit: 30,
    offset: 0,
    query: query,
    retailer_id: retailer.retailer_id,
    state_id: address.state.id,
  });
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(getSearchByStoreFailed());
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
    dispatch(getSearchByStoreSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getSearchByStoreFailed(err));
  };
};

const getSearchByStore = (query, address, retailer) => {
  let reqBody = reqBodyFromState(query, address, retailer);
  return (dispatch) => {
    dispatch(getSearchByStoreInProgress());
    searchByStoreAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { getSearchByStore };
