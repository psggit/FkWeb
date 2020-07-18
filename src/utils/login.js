import config from "../config";
import CommonHeaders from "./common";

const URL = "https://api." + config.BASE_DOMAIN + "/consumer/api/1/fk/login";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const loginAPI = (grantToken) => {
  var body = { grant_token: grantToken };
  return fetch(URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });
};

export { loginAPI };
