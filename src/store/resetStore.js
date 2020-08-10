//import CommonHeaders from "../utils/common";
import config from "../config";

const URL = "https://api." + config.BASE_DOMAIN + "/consumer/api/1/verify";
// const headers = { ...CommonHeaders, "Content-Type": "application/json" };

/*
const resetStore = async () => {
  const resp = await fetch(URL, {
    method: "GET",
    credentials: "include",
    headers: headers,
  });
  if (resp.status !== 200) {
    localStorage.clear();
  }
};
*/

const resetStore = () => {
  var request = new XMLHttpRequest();
  request.open("GET", URL, false); // `false` makes the request synchronous
  request.withCredentials = true;
  request.send(null);

  if (request.status !== 200) {
    localStorage.clear();
  }
};

export { resetStore };
