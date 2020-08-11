import { selectAddressAction } from "./actions";
import { currentStateVersion } from "./reducer";

const addressLocalStorageHandler = (state, action) => {
  //On address change, save it to store
  if (action.type === selectAddressAction.type) {
    const v = currentStateVersion.toString();
    localStorage.setItem("selectedAddressVersion", v);
    localStorage.setItem("selectedAddress", JSON.stringify(action.payload));
  }
};

export { addressLocalStorageHandler };
