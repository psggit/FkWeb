import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://gremlin." + config.BASE_DOMAIN + "/consumer/marketing/ads/get_ads/";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const getAdsAPI = (cityId, process, onSuccess, onError) => {
  fetch(URL + cityId, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { getAdsAPI };
