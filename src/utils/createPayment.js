import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." + config.BASE_DOMAIN + "/payments/api/1/jp/creat/nodal";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const createPaymentAPI = (reqBody, process, onSuccess, onError) => {
  fetch(URL, {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify(reqBody),
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { createPaymentAPI };
