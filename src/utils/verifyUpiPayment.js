import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." +
  config.BASE_DOMAIN +
  "/payments/api/2/upi/transaction/status/";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const verifyUpiPaymentAPI = (oid, process, onSuccess, onError) => {
  fetch(URL + oid, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { verifyUpiPaymentAPI };
