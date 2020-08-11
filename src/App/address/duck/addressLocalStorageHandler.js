import { selectAddressAction } from "./actions";
import { currentStateVersion } from "./reducer";
import { localStoreUserDiffers } from "../../common/actions";

const addressLocalStorageHandler = (state, action) => {
  //On address change, save it to store
  if (action.type === selectAddressAction.type) {
    const v = currentStateVersion.toString();
    localStorage.setItem("selectedAddressVersion", v);
    localStorage.setItem("selectedAddress", JSON.stringify(action.payload));
  }

  //When the user differes, remove from the store
  if (action.type === localStoreUserDiffers.type) {
    localStorage.removeItem("selectedAddressVersion");
    localStorage.removeItem("selectedAddress");
  }
};

export { addressLocalStorageHandler };
