import config from "../config";
import CommonHeaders from "./common";

const URL =
  "https://api." + config.BASE_DOMAIN + "/payments/api/2/upi/collect/nodal/";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const createCollectRequestAPI = (orderID, process, onSuccess, onError) => {
  fetch(URL + orderID, {
    method: "GET",
    credentials: "include",
    headers: headers,
  })
    .then((res) => process(res))
    .then((data) => onSuccess(data))
    .catch((err) => onError(err));
};

export { createCollectRequestAPI };
