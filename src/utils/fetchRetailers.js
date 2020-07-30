import config from "../config";
import CommonHeaders from "./common";

const URL = "https://catman." + config.BASE_DOMAIN + "/retailer/list";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const fetchRetailersAPI = (reqBody, process, onSuccess, onError) => {
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

export { fetchRetailersAPI };
