import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." +
  config.BASE_DOMAIN +
  "/orderman/api/3/consumer/transactions/";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const getOrdersDetailAPI = (reqPath, process, onSuccess, onError) => {
  fetch(URL + reqPath, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { getOrdersDetailAPI };
