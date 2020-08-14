import {
  getPlacesDetailsAction,
  storeMapGpsAction,
  deliveryCheckAction,
} from "./actions";
import { validateDeliveryAddressAPI } from "../../../../utils/validateDeliveryAddress";

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
const processResponse = () => {
  return (res) => {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 400) {
      return res.json();
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const validateAddressOperation = (gps) => {
  const reqBody = { gps: gps };
  return (dispatch) => {
    validateDeliveryAddressAPI(
      reqBody,
      processResponse(dispatch),
      onSuccessHandler(dispatch),
      onErrorHandler(dispatch)
    );
  };
};

const onSuccessHandler = (dispatch) => {
  return (data) => {
    if (data.city.deliverable_city === true) {
      dispatch(deliveryCheckAction("success"));
    } else {
      dispatch(deliveryCheckAction("failed"));
    }
  };
};

const onErrorHandler = (dispatch) => {
  return () => {
    dispatch(deliveryCheckAction("failed"));
  };
};

export {
  validateAddressOperation,
  getPlacesDetailsOperation,
  storeGpsOperation,
};
