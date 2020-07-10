import { getHomeCarousel } from "./actions";

const fetchHomeCarousel = () => {
  return (dispatch) => {
    return fetch(
      "https://gremlin.hipbar-dev.com/consumer/marketing/ads/get_ads/15",
      {
        headers: { Authorization: "Bearer 97741d2bd9cb43b1a6e1b05e1d4b5726" },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(getHomeCarousel(json));
      });
  };
};

export { fetchHomeCarousel };
