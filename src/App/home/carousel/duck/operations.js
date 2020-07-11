import { getHomeCarousel } from "./actions";

const fetchHomeCarousel = () => {
  return (dispatch) => {
    return fetch(
      "https://gremlin.hipbar-dev.com/consumer/marketing/ads/get_ads/15",
      {
        headers: { Authorization: "Bearer cb04d1e946864660a022c5c88d486fd0" },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(getHomeCarousel(json));
      });
  };
};

export { fetchHomeCarousel };
