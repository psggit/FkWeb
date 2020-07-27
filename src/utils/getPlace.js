import config from "../config";
import CommonHeaders from "./common";

const BaseURL =
  "https://maps.googleapis.com/maps/api/place/autocomplete/json?sensor=false&key=" +
  config.GMAPS_KEY +
  "&reference=";
const headers = { ...CommonHeaders, "Content-Type": "application/json" };
const autoCompleteLocationAPI = (placeID, process, onSuccess, onError) => {
  const URL = BaseURL + placeID;
  fetch(URL, {
    method: "GET",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { autoCompleteLocationAPI };
