import {
  getSearchByStoreSuccess,
  getSearchByStoreInProgress,
  getSearchByStorePaginationSuccess,
  getSearchByStoreFailed,
} from "./action";
import { searchByStoreAPI } from "../../../utils";

const reqBodyFromState = (query, address, retailer, limit, offset) => {
  return JSON.stringify({
    city_id: address.city.id,
    lat_lng: address.gps,
    limit: limit,
    offset: offset,
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

const onSuccess = (dispatch, offset) => {
  return (data) => {
    data.NewOffset = offset;
    if (offset === 0) {
      dispatch(getSearchByStoreSuccess(data));
    } else {
      dispatch(getSearchByStorePaginationSuccess(data));
    }
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getSearchByStoreFailed(err));
  };
};

const getSearchByStore = (query, address, retailer, limit, offset) => {
  let reqBody = reqBodyFromState(query, address, retailer, limit, offset);
  return (dispatch) => {
    dispatch(getSearchByStoreInProgress());
    searchByStoreAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch, offset),
      onError(dispatch)
    );
  };
};

export { getSearchByStore };
