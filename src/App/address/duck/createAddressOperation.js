import {
  createAddressInProgressAction,
  createAddressFailAction,
  createAddressSuccessAction,
} from "./actions";

import { createAddressAPI } from "../../../utils/createAddress";
import { editAddressAPI } from "../../../utils/editAddress";

const reqBodyFromState = (props) => {
  const flatNumber = props.address.flat_number;
  const current_address = props.address.current_address;
  const pincode = props.address.pincode;
  const landmark = props.address.landmark;
  const address_type = props.address.address_type;
  const gps = props.mapCenterGps;
  const address_id = props.editAddress ? props.editAddress.address_id : null;
  return {
    address: current_address,
    address_id: address_id,
    flat_number: flatNumber,
    gps: gps.lat + "," + gps.lng,
    landmark: landmark,
    pincode: pincode,
    type: address_type,
  };
};
const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(createAddressSuccessAction(data));
  };
};

const onError = (dispatch) => {
  return () => {
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
  const reqParams = reqBodyFromState(addressState);
  return (dispatch) => {
    dispatch(createAddressInProgressAction());
    if (reqParams.address_id === undefined) {
      createAddressAPI(
        reqParams,
        processResponse(dispatch),
        onSuccess(dispatch),
        onError(dispatch)
      );
    } else {
      editAddressAPI(
        reqParams,
        processResponse(dispatch),
        onSuccess(dispatch),
        onError(dispatch)
      );
    }
  };
};

export { createAddressOperation };
