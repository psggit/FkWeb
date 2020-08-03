import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." + config.BASE_DOMAIN + "/consumer/api/1/address/list/all";
const headers = { ...CommonHeaders, "Content-Type": "application/json" };
const fetchAddressListAPI = (process, onSuccess, onError) => {
  fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { fetchAddressListAPI };
