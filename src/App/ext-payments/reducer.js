import { combineReducers } from "redux";
import { webPaymentReducer } from "./webPayment/duck/reducer";
import { verifyPaymentReducer } from "./verifyWebPayment/duck/reducer";

const webPayReducer = combineReducers({
  webPayment: webPaymentReducer,
  verifyPayment: verifyPaymentReducer,
});

export { webPayReducer };
