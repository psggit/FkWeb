import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." +
  config.BASE_DOMAIN +
  "/orderman/api/1/consumer/order/create/fk/delivery";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const createOrderAPI = (reqBody, process, onSuccess, onError) => {
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

export { createOrderAPI };
