import { fetchCriticalAdsAPI } from '../../../../utils';
import {
  fetchCriticalAdsSuccess,
  fetchCriticalAdsFailure,
  fetchCriticalAdsInProgress,
} from "./actions";

const processResponse = () => {
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

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(fetchCriticalAdsSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(fetchCriticalAdsFailure(err));
  };
};

const fetchHomeCriticalAds = () => {
  return (dispatch) => {
    dispatch(fetchCriticalAdsInProgress());
    fetchCriticalAdsAPI(
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { fetchHomeCriticalAds };
