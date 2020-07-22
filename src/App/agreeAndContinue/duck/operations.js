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

const loginHandler = (gt, dispatch) => {
  dispatch(loginInProgress());
  loginAPI(gt.grantToken)
    .then((res) => {
      if (res.status === 200) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailed());
      }
    })
    .catch((error) => {
      dispatch(loginFailed(error));
    });
};

const loginWithGrantToken = (dispatch) => {
  return fkPlatform
    .getModuleHelper()
    .getPermissionsModule()
    .getToken(scopeReq)
    .then((gt) => {
      dispatch(fetchGrantTokenSuccess());
      loginHandler(gt, dispatch);
    })
    .catch(() => {
      dispatch(fetchGrantTokenFailed());
    });
};

/*
    return { grantToken: "dummyToken", error: false };
 */

const login = () => {
  return (dispatch) => {
    dispatch(loginInProgress());
    if (fkPlatformActive) {
      dispatch(getGrantTokenInitiated);
      return loginWithGrantToken(dispatch);
    } else {
      return loginHandler({ grantToken: "dummyToken" }, dispatch);
    }
  };
};

const setTc = () => {
  localStorage.setItem("tandc/status", "true");
};

const checkTC = () => {
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
  };
};

export { login, agreeTandC, checkTC };
