import {
  getSearchByStoreSuccess,
  getSearchByStoreInProgress,
  getSearchByStoreFailed,
} from "./action";
import { searchByStoreAPI } from "../../../utils";

const reqBodyFromState = (query) => {
  return JSON.stringify({
    city_id: 5,
    lat_lng: "13.011557355101441,80.25409296154976",
    limit: 9,
    offset: 0,
    query: query,
    retailer_id: 436,
    state_id: 4,
  });
};

const processResponse = (dispatch) => {
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
    dispatch(getSearchByStoreSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getSearchByStoreFailed(err));
  };
};

const getSearchByStore = (query) => {
  let reqBody = reqBodyFromState(query);
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
