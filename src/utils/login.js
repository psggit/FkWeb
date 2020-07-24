import config from "../config";
import CommonHeaders from "./common";

const URL = "https://api." + config.BASE_DOMAIN + "/consumer/api/1/fk/login";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const loginAPI = (grantToken, process, onSuccess, onError) => {
  var body = { grant_token: grantToken };
  fetch(URL, {
    method: "POST",
    headers: headers,
    credentials: "include",
    body: JSON.stringify(body),
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { loginAPI };
