import { addressLocalStorageHandler } from "../App/address";
import { userLocalStorageHandler } from "../App/userBasicInfo";

const localStorageManager = (state) => (next) => (action) => {
  let result = next(action);
  addressLocalStorageHandler(state, result);
  userLocalStorageHandler(state, result);
  return result;
};

export { localStorageManager };
