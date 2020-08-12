import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://loki." + config.BASE_DOMAIN + "/locality/cityAndLocalityFromPoint";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const validateDeliveryAddressAPI = (reqBody, process, onSuccess, onError) => {
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

export { validateDeliveryAddressAPI };
