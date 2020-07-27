import {
  getAddressFromGpsAction,
  getPlacesDetailsAction,
  autoCompleteAction,
} from "./actions";

const getAddressFromGpsOperation = (value) => {
  return (dispatch, getState) => {
    var addressFromGps = getState().chooseLocation.mapCenterGps.find((gps) => {
      return gps == value;
    });
    dispatch(getAddressFromGpsAction(addressFromGps));
  };
};

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

export {
  getAddressFromGpsOperation,
  getPlacesDetailsOperation,
  autoCompleteOperation,
};
