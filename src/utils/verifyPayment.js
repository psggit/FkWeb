import config from "../config";
import CommonHeaders from "./common";

const URL = "https://api." + config.BASE_DOMAIN + "/payments/api/1/jp/verify/";
const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const verifyPaymentAPI = (oid, process, onSuccess, onError) => {
  fetch(URL + oid, {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify({}),
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { verifyPaymentAPI };
