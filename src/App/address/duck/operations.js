import {
  selectAddressAction,
  validateAddressAction,
  fetchAddressListSuccessAction,
  fetchAddressListFailAction,
  updateAddressListAction,
} from "./actions";

import { fetchAddressListAPI } from "../../../utils/fetchAddress";
import { validateDeliveryAddressAPI } from "../../../utils/validateDeliveryAddress";

const SelectAddressOperation = (value) => {
  return (dispatch) => {
    dispatch(selectAddressAction(value));
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(updateAddressListAction(data));
    dispatch(fetchAddressListSuccessAction(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(fetchAddressListFailAction(err));
  };
};

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

const FetchAddressListOperation = (selectedAddress) => {
  return (dispatch) => {
    fetchAddressListAPI(
      processResponse(dispatch),
      onSuccess(dispatch, selectedAddress),
      onError(dispatch)
    );
  };
};

const ValidateAddressOperation = (address) => {
  const reqBody = { gps: address.gps };
  // const reqBody = { gps: "test data" };
  return (dispatch) => {
    validateDeliveryAddressAPI(
      reqBody,
      processResponse(dispatch),
      onSuccessHandler(dispatch, address),
      onErrorHandler(dispatch)
    );
  };
};

const onSuccessHandler = (dispatch, address) => {
  return () => {
    dispatch(validateAddressAction("success"));
    dispatch(selectAddressAction(address));
  };
};

const onErrorHandler = (dispatch) => {
  return () => {
    dispatch(validateAddressAction("failed"));
  };
};

export {
  SelectAddressOperation,
  FetchAddressListOperation,
  ValidateAddressOperation,
};
