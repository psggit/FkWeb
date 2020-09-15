import { addressLocalStorageHandler } from "../App/address";
import { userLocalStorageHandler } from "../App/login";
import { cartLocalStorageHandler } from "../App/common/cart";
import { locationLocalStorageHandler } from "../App/stateCity";

const localStorageManager = (store) => (next) => (action) => {
  let result = next(action);
  addressLocalStorageHandler(store, result);
  userLocalStorageHandler(store, result);
  cartLocalStorageHandler(store, result);
  locationLocalStorageHandler(store, result);
  return result;
};

export { localStorageManager };
