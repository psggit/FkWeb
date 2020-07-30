import { getMyOrdersAPI } from "../../../utils";

const onSuccess = () => {
  return (data) => {};
};

const onError = (dispatch) => {
  return (err) => {
    alert(err);
  };
};

const processResponse = (dispatch) => {
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

const GetMyOrdersOperation = (value) => {
  var reqBody = {
    offset: value.offset,
    limit: 10,
  };

  return (dispatch) => {
    getMyOrdersAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(),
      onError(dispatch)
    );
  };
};

export { GetMyOrdersOperation };
