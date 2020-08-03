import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." +
  config.BASE_DOMAIN +
  "/orderman/api/1/consumer/order/fk/details";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const getCurrentOrderAPI = (process, onSuccess, onError) => {
  fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { getCurrentOrderAPI };
