import FKPlatform from "fk-platform-sdk/web";
import { loginAPI } from "../../../utils";
import {
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

/* TODO:@hl05 better error management */
/* TODO:@hl05 making it work with regular web */

var scopeReq = [
  { scope: "user.email", isMandatory: false, shouldVerify: false },
  { scope: "user.mobile", isMandatory: true, shouldVerify: true },
  { scope: "user.name", isMandatory: true, shouldVerify: true },
  //{ scope: "user.location", isMandatory: false, shouldVerify: false },
];

const processResponse = () => {
  return (res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Something went wrong, try again");
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(loginSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(loginFailed(err));
  };
};

const loginHandler = (gt, dispatch) => {
  dispatch(loginInProgress());
  loginAPI(
    gt.grantToken,
    processResponse(dispatch),
    onSuccess(dispatch),
    onError(dispatch)
  );
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
      const message = "Please provide neccessary permissions to use HipBar";
      dispatch(fetchGrantTokenFailed(message));
    });
};

const login = () => {
  return (dispatch) => {
    dispatch(loginInProgress());
    if (fkPlatformActive) {
      dispatch(getGrantTokenInitiated);
      return loginWithGrantToken(dispatch);
    } else {
      return loginHandler({ grantToken: "" }, dispatch);
    }
  };
};

const exitToFk = () => {
  return () => {
    let navigationModule = fkPlatform.getModuleHelper().getNavigationModule();
    navigationModule.exitSession();
  };
};

export { login, exitToFk };
