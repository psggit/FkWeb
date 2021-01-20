import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." +
  config.BASE_DOMAIN +
  "/orderman/api/1/consumer/order/finalize/delivery";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const finalizeOrderAPI = (reqBody, process, onSuccess, onError) => {
  console.log("finalizeOrderAPI");
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

export { finalizeOrderAPI };
