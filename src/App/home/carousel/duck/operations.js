import { getHomeCarousel } from "./actions";
import config from "../../../../config";

const fetchAds = () => {
  const URL =
    "https://gremlin." +
    config.BASE_DOMAIN +
    "/consumer/marketing/ads/get_ads/15";
  return fetch(URL, {
    headers: { Authorization: "Bearer cb04d1e946864660a022c5c88d486fd0" },
  });
};

const fetchHomeCarousel = () => {
  return (dispatch) => {
    return fetchAds()
      .then((response) => response.json())
      .then((json) => {
        dispatch(getHomeCarousel(json));
      });
  };
};

export { fetchHomeCarousel };
