import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://cors-anywhere.herokuapp.com/" +
  "https://retailer." +
  config.BASE_DOMAIN +
  "/Api/stockandprice/search/retailer/drinks";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const searchByStoreAPI = (reqBody, process, onSuccess, onError) => {
  fetch(URL, {
    method: "POST",
    headers: headers,
    body: reqBody,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { searchByStoreAPI };
