import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://retailer." +
  config.BASE_DOMAIN +
  "/Api/stockandprice/listing/genres";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const searchGenresAPI = (reqBody, process, onSuccess, onError) => {
  fetch(URL, {
    method: "POST",
    headers: headers,
    body: reqBody,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

const B_URL =
  "https://retailer." +
  config.BASE_DOMAIN +
  "/Api/stockandprice/listing/brands";

const getBrandAPI = (reqBody, process, onSuccess, onError) => {
  fetch(B_URL, {
    method: "POST",
    headers: headers,
    body: reqBody,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { searchGenresAPI, getBrandAPI };
