import { addressLocalStorageHandler } from "../App/address";
import { userLocalStorageHandler } from "../App/userBasicInfo";
import { cartLocalStorageHandler } from "../App/common/cart";

const localStorageManager = (store) => (next) => (action) => {
  let result = next(action);
  addressLocalStorageHandler(store, result);
  userLocalStorageHandler(store, result);
  cartLocalStorageHandler(store, result);
  return result;
};

export { localStorageManager };
