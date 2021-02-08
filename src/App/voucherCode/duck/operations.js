import {
  fetchAvailableVoucherProgress,
  fetchAvailableVoucherSuccess,
  fetchAvailableVoucherFailed,
  searchVoucherProgress,
  searchVoucherSuccess,
  searchVoucherFailed,
} from "./action";

import { fetchAvailVoucherCodeAPI, searchVoucherCodeAPI } from "../../../utils";

const processResponse = () => {
  return (res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw res;
    }
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(fetchAvailableVoucherSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(fetchAvailableVoucherFailed(err));
  };
};

const onSearchVoucherSuccess = (dispatch) => {
  return (data) => {
    dispatch(searchVoucherSuccess(data));
  };
};

const onSearchVoucherError = (dispatch) => {
  return (err) => {
    dispatch(searchVoucherFailed(err));
  };
};

const fetchAvailableVoucher = (reqBody) => {
  return (dispatch) => {
    dispatch(fetchAvailableVoucherProgress());
    fetchAvailVoucherCodeAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

const searchVoucherCode = (reqBody) => {
  return (dispatch) => {
    dispatch(searchVoucherProgress());
    searchVoucherCodeAPI(
      reqBody,
      processResponse(dispatch),
      onSearchVoucherSuccess(dispatch),
      onSearchVoucherError(dispatch)
    );
  };
};

export { fetchAvailableVoucher, searchVoucherCode };
