import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." + config.BASE_DOMAIN + "/consumer/api/1/address/delete";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const deleteAddressAPI = (reqBody, process, onSuccess, onError) => {
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

export { deleteAddressAPI };
