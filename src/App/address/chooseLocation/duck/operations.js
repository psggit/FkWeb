import {
  getPlacesDetailsAction,
  autoCompleteAction,
  storeMapGpsAction,
} from "./actions";

const getPlacesDetailsOperation = (value) => {
  return (dispatch, getState) => {
    var placeDetails = getState().chooseLocation.placeDetails.find(
      (details) => {
        return details == value;
      }
    );
    dispatch(getPlacesDetailsAction(placeDetails));
  };
};

const storeGpsOperation = (value) => {
  return (dispatch) => {
    dispatch(storeMapGpsAction(value));
  };
};

const autoCompleteOperation = (value) => {
  return (dispatch, getState) => {
    var autoCompletePlaces = getState().chooseLocation.autoCompletePlaces.find(
      (data) => {
        return data == value;
      }
    );
    dispatch(autoCompleteAction(autoCompletePlaces));
  };
};

export { getPlacesDetailsOperation, storeGpsOperation, autoCompleteOperation };
