import config from "../config";
import CommonHeaders from "./common";

const fetchAvailVoucherCodeAPI = (reqBody, process, onSuccess, onError) => {
  const URL =
    "https://api." +
    config.BASE_DOMAIN +
    "/promoman/api/1/promoengine/coupon/list";
  const headers = { ...CommonHeaders, "Content-Type": "application/json" };
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

export { fetchAvailVoucherCodeAPI };
