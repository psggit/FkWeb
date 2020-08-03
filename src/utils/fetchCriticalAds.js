import config from "../config";
import CommonHeaders from "./common";

const URL = "https://gremlin." + config.BASE_DOMAIN + "/consumer/marketing/ads/critical_ads/15";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const fetchCriticalAdsAPI = (process, onSuccess, onError) => {
  console.log("fetchCriticalAdsAPI");
  fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
  .then((res) => process(res))
  .then((data) => onSuccess(data))
  .catch((err) => onError(err));
};

export { fetchCriticalAdsAPI };
