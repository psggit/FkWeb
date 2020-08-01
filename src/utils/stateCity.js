import config from "../config";
import CommonHeaders from "./common";

const stateURL = "https://loki." + config.BASE_DOMAIN + "/available/states";
const cityURL = "https://loki." + config.BASE_DOMAIN + "/available/cities";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const getAvaialableStatesAPI = (process, onSuccess, onError) => {
  fetch(stateURL, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

const getAvaialableCitiesAPI = (reqBody, process, onSuccess, onError) => {
  fetch(cityURL, {
    method: "POST",
    credentials: "include",
    headers: headers,
    body: JSON.stringify(reqBody),
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { getAvaialableStatesAPI, getAvaialableCitiesAPI };
