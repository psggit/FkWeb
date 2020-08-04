import {
  deleteAddressInProgressAction,
  deleteAddressFailAction,
  deleteAddressSuccessAction,
} from "./actions";

import { deleteAddressAPI } from "../../../utils";
import {FetchAddressListOperation} from "./"

const reqBodyFromState = (addressID) => {
  return {
    address_id: addressID
  }
}
const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(deleteAddressSuccessAction(data));
    dispatch(FetchAddressListOperation());
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(deleteAddressFailAction());
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

const deleteAddressOperation = (addressID) => {
  const reqParams = reqBodyFromState(addressID)
  return (dispatch) => {
    dispatch(deleteAddressInProgressAction());
    deleteAddressAPI(
      reqParams,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { deleteAddressOperation };
