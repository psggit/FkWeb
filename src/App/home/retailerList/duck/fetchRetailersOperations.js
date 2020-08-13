import {
  fetchRetailersSuccessfull,
  fetchRetailersFailure,
  fetchRetailersInProgress,
} from "./actions";
import { fetchRetailersAPI } from "../../../../utils";

const reqBodyFromState = (selectedAddress) => {
  return {
    city_id: selectedAddress.city.id,
    state_id: selectedAddress.state.id,
    gps: selectedAddress.gps,
    offset: 0,
    limit: 50,
  };
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
      if (res.status === 500) {
        return res.json();
      } else {
        throw new Error("Something went wrong, try again");
      }
    }
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(fetchRetailersSuccessfull(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(fetchRetailersFailure(err));
  };
};

const fetchRetailersOperation = (selectedAddress) => {
  let reqBody = reqBodyFromState(selectedAddress);
  return (dispatch) => {
    dispatch(fetchRetailersInProgress());
    fetchRetailersAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { fetchRetailersOperation };
