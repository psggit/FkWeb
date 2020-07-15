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

let fkPlatform = new FKPlatform("hipbar");

var scopeReq = [
  { scope: "user.email", isMandatory: false, shouldVerify: false },
  { scope: "user.mobile", isMandatory: true, shouldVerify: true },
  { scope: "user.name", isMandatory: true, shouldVerify: false },
];

const getGrantToken = () => {
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
};

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
          dispatch(loginFailed());
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
