import {
  getHomeCarouselInProgress,
  getHomeCarouselSuccess,
  getHomeCarouselFailure,
} from "./actions";
import { getAdsAPI } from "../../../../utils";

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(getHomeCarouselSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(getHomeCarouselFailure(err));
    alert(err);
  };
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(getHomeCarouselFailure());
      return res.json();
    }
    if (res.status === 400) {
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const fetchHomeCarousel = (value) => {
  return (dispatch) => {
    dispatch(getHomeCarouselInProgress());
    getAdsAPI(
      value.cityID,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { fetchHomeCarousel };
