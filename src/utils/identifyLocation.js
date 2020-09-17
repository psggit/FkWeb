import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." + config.BASE_DOMAIN + "/loki/api/1/location/identify";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const guessAddressAPI = (gps, process, onSuccess, onError) => {
  var body = { gps: gps };
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

export { guessAddressAPI };
