import { loginSuccess } from "./actions";
import { localStoreUserDiffers } from "../../common/actions";

const userLocalStorageHandler = (state, action) => {
  //on loginSuccess, set the user id
  if (action.type === loginSuccess.type) {
    const userID = action.payload.data.auth_user.user_id.toString();
    localStorage.setItem("HbUserID", userID);
  }

  if (action.type === localStoreUserDiffers.type) {
    localStorage.removeItem("HbUserID");
  }
};

export { userLocalStorageHandler };
