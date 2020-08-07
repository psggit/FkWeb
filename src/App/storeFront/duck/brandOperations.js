import { getBrandSuccess, getBrandInProgress, getBrandFailed } from "./action";
import { getBrandAPI } from "../../../utils";

const reqBodyFromState = (address, genreId, retailer) => {
  return JSON.stringify({
    city_id: address.city.id,
    offset: 0,
    genre_id: genreId,
    gps: address.gps,
    retailer_id: retailer.retailer_id,
    limit: 30,
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
    dispatch(getBrandSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getBrandFailed(err));
  };
};

const getBrands = (address, genreId, retailer) => {
  let reqBody = reqBodyFromState(address, genreId, retailer);
  return (dispatch) => {
    dispatch(getBrandInProgress());
    getBrandAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { getBrands };
