import config from "../config";
import CommonHeaders from "./common";

const BaseURL =
  "https://maps.googleapis.com/maps/api/place/autocomplete/json?sensor=false&key=" +
  config.GMAPS_KEY +
  "&input=";
const headers = { };
const autoCompleteLocationAPI = (searchTerm, process, onSuccess, onError) => {
  const URL = BaseURL + searchTerm;
  fetch(URL, {
    method: "GET",
    mode: "no-cors",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { autoCompleteLocationAPI };
