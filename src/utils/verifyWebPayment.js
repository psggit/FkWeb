import CommonHeaders from "./common";
import config from "../config";
const URL =
  "https://api." +
  config.BASE_DOMAIN +
  "/orderman/api/1/order/modify/status/check";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

function verifyWebPaymentAPI(reqBody, process, onSuccess, onError) {
  fetch(URL, {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify(reqBody),
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
}

export { verifyWebPaymentAPI };
