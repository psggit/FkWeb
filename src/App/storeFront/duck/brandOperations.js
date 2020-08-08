import {
  getBrandSuccess,
  getBrandPaginationSuccess,
  getBrandInProgress,
  getBrandFailed,
} from "./action";
import { getBrandAPI } from "../../../utils";

const reqBodyFromState = (address, genreId, retailer, limit, offset) => {
  return JSON.stringify({
    city_id: address.city.id,
    offset: offset,
    genre_id: genreId,
    gps: address.gps,
    retailer_id: retailer.retailer_id,
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

const onInitialSuccess = (dispatch) => {
  return (data) => {
    dispatch(getBrandSuccess(data));
  };
};
const onPaginationSuccess = (dispatch) => {
  return (data) => {
    dispatch(getBrandPaginationSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getBrandFailed(err));
  };
};

const getBrands = (address, genreId, retailer, limit, offset) => {
  let reqBody = reqBodyFromState(address, genreId, retailer, limit, offset);
  return (dispatch) => {
    dispatch(getBrandInProgress());
    if (offset === 0) {
      getBrandAPI(
        reqBody,
        processResponse(dispatch),
        onInitialSuccess(dispatch),
        onError(dispatch)
      );
    } else {
      getBrandAPI(
        reqBody,
        processResponse(dispatch),
        onPaginationSuccess(dispatch),
        onError(dispatch)
      );
    }
  };
};

export { getBrands };
