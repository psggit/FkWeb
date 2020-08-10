import { getPlacesDetailsAction, storeMapGpsAction } from "./actions";

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

export { getPlacesDetailsOperation, storeGpsOperation };
