import { loginSuccess } from "./actions";

const userLocalStorageHandler = (state, action) => {
  //on loginSuccess, set the user id
  if (action.type === loginSuccess.type) {
    const userID = action.payload.data.auth_user.user_id.toString();
    localStorage.setItem("HbUserID", userID);
  }
};

export { userLocalStorageHandler };
