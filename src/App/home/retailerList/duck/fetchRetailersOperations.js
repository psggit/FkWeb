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
    limit: 20,
  };
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(fetchRetailersSuccessfull());
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
    console.log(data);
    dispatch(fetchRetailersSuccessfull(data.data));
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
