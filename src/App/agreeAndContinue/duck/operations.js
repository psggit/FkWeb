import FKPlatform from "fk-platform-sdk/web";
import { loginAPI } from "../../../utils";
import {
  tcAgreed,
  getGrantTokenInitiated,
  fetchGrantTokenSuccess,
  fetchGrantTokenFailed,
  loginInProgress,
  loginSuccess,
  loginFailed,
} from "./actions";

let fkPlatformActive = true;

let fkPlatform = {};

try {
  fkPlatform = new FKPlatform("hipbar");
} catch (e) {
  fkPlatformActive = false;
}

var scopeReq = [
  { scope: "user.email", isMandatory: false, shouldVerify: false },
  { scope: "user.mobile", isMandatory: true, shouldVerify: true },
  { scope: "user.name", isMandatory: true, shouldVerify: false },
];

const getGrantToken = () => {
  if (fkPlatformActive) {
    return fkPlatform
      .getModuleHelper()
      .getPermissionsModule()
      .getToken(scopeReq)
      .then((e) => {
        return { grantToken: e.grantToken, error: false };
      })
      .catch(() => {
        return { grantToken: "", error: false };
      });
  } else {
    return { grantToken: "dummyToken", error: false };
  }
};

/*
const testFK = () => {
  return { grantToken: "grant-token-local", error: false };
};
*/

const login = () => {
  return (dispatch) => {
    dispatch(getGrantTokenInitiated);
    let gt = getGrantToken();
    if (gt.error) {
      dispatch(fetchGrantTokenFailed());
      return;
    }
    dispatch(fetchGrantTokenSuccess());
    dispatch(loginInProgress());
    loginAPI(gt.token)
      .then((res) => {
        if (res.status == 200) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginSuccess());
          //dispatch(loginFailed());
        }
      })
      .catch((error) => {
        dispatch(loginFailed(error));
      });
  };
};

const setTc = () => {
  localStorage.setItem("tandc/status", "true");
};

const showTC = () => {
  return (dispatch) => {
    var agreed = localStorage.getItem("tandc/status");
    if (agreed === "true") {
      dispatch(tcAgreed());
      dispatch(login());
    }
  };
};

const agreeTandC = () => {
  return (dispatch) => {
    setTc();
    dispatch(tcAgreed());
    dispatch(login());
  };
};

export { login, agreeTandC, showTC };
