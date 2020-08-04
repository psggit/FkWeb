import {
  createAddressInProgressAction,
  createAddressFailAction,
  createAddressSuccessAction,
} from "./actions";

import { createAddressAPI } from "../../../utils";

const reqBodyFromState = (props) => {

  const flatNumber = props.address.flat_number;
  const current_address = props.address.current_address;
  const pincode = props.address.pincode;
  const landmark = props.address.landmark;
  const address_type = props.address.address_type;
  const gps = props.mapCenterGps;
  return {
    address:current_address,
    flat_number: flatNumber,
    gps: gps.lat+","+gps.lng,
    landmark:landmark,
    pincode:pincode,
    type: address_type,
  }

}
const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(createAddressSuccessAction(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(createAddressFailAction());
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

const createAddressOperation = (addressState) => {
  const reqParams = reqBodyFromState(addressState)
  return (dispatch) => {
    dispatch(createAddressInProgressAction());
    createAddressAPI(
      reqParams,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { createAddressOperation };
