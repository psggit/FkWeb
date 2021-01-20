import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." +
  config.BASE_DOMAIN +
  "/orderman/api/1/order/paymentamount/details/";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const webPaymentAmtDetailsAPI = (reqBody, process, onSuccess, onError) => {
  fetch(URL + reqBody, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { webPaymentAmtDetailsAPI };
