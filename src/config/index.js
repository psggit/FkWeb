//let JusPayScript = "https://sandbox.juspay.in/pay-v3.js";
let JusPayScript = "https://api.juspay.in/pay-v3.js";
if (ARGS_BUILD_ENV == "production") {
  JusPayScript = "https://api.juspay.in/pay-v3.js";
}

const CONFIG = {
  BASE_DOMAIN: ARGS_BASE_DOMAIN,
  GMAPS_KEY: "AIzaSyCHGLLAB117OiC9rDD9ON3gRP1LQLAAQmI",
  SCHEME: "https://",
  JusPayScript: JusPayScript,
};

export default CONFIG;
