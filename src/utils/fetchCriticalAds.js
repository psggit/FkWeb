import config from "../config";
import CommonHeaders from "./common";

const URL = "https://gremlin." + config.BASE_DOMAIN + "/consumer/marketing/ads/critical_ads/15";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const fetchCriticalAdsAPI = (reqBody, process, onSuccess, onError) => {
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

export { fetchCriticalAdsAPI };
