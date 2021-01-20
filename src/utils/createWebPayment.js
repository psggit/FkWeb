import config from "../config";
// import CommonHeaders from "./common";

const URL =
  "https://api." + config.BASE_DOMAIN + "/payments/api/1/jp/create/nodal";

const verifyHeaders = {
  "App-Name": "web",
  platform: "web",
};
const headers = { ...verifyHeaders, "Content-Type": "application/json" };

const createWebPaymentAPI = (reqBody, process, onSuccess, onError) => {
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

export { createWebPaymentAPI };
