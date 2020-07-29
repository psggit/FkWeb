import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." + config.BASE_DOMAIN + "/consumer/api/2/update/signupinfo"

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const updateBasicKYCAPI = (reqBody, process, onSuccess, onError) => {
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

export { updateBasicKYCAPI };
