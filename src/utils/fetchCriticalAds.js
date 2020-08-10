import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://gremlin." +
  config.BASE_DOMAIN +
  "/consumer/marketing/ads/critical_ads/";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const fetchCriticalAdsAPI = (cityId, process, onSuccess, onError) => {
  fetch(URL + cityId, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { fetchCriticalAdsAPI };
