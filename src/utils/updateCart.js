import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://orderman." + config.BASE_DOMAIN + "/consumer/cart/update_cart";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const updateCartAPI = (reqBody, process, onSuccess, onError) => {
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

export { updateCartAPI };
