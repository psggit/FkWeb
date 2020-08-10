import config from "../config";
import CommonHeaders from "./common";

const URL = "https://api." + config.BASE_DOMAIN + "/euia";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const userStatusAPI = () => {
  return fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
};

export { userStatusAPI };
