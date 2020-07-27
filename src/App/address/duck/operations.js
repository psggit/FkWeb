import {
  selectAddressAction,
  fetchAddressListSuccessAction,
  fetchAddressListFailAction,
  updateAddressListAction,
} from "./actions";

import { fetchAddressListAPI } from "../../../utils/fetchAddress";

const SelectAddressOperation = (value) => {
  return (dispatch, getState) => {
    var selectedAddress = getState().addressStore.savedUserAddresses.find(
      (address) => {
        return address.address_id == value;
      }
    );
    dispatch(selectAddressAction(selectedAddress));
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(fetchAddressListSuccessAction(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(fetchAddressListFailAction(err));
  };
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(updateAddressListAction(res.body));
      return res.json();
    }
    if (res.status === 400) {
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const FetchAddressListOperation = () => {
  return (dispatch) => {
    fetchAddressListAPI(
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { SelectAddressOperation, FetchAddressListOperation };
