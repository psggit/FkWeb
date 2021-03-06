import {
  selectAddressAction,
  validateAddressAction,
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

const onSuccess = (dispatch, selectedAddress) => {
  return (data) => {
    if (selectedAddress != null) {
      for (var i = 0; i < data.length; i++) {
        if (selectedAddress.address_id === data[i].address_id) {
          dispatch(selectAddressAction(data[i]));
          break;
        }
      }
    }
    dispatch(updateAddressListAction(data));
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
  return () => {
    dispatch(validateAddressAction("success"));
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
