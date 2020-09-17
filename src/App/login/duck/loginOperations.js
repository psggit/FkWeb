import FKPlatform from "fk-platform-sdk/web";
import { loginAPI, guessAddressAPI } from "../../../utils";
import {
  getGrantTokenInitiated,
  fetchGrantTokenSuccess,
  fetchGrantTokenFailed,
  loginInProgress,
  loginSuccess,
  loginFailed,
  guessAddressInProgress,
  guessAddressSuccess,
  guessAddressFailed,
} from "./actions";

import { selectState, selectCity } from "../../stateCity/duck/actions";

import { selectAddressAction } from "../../address/duck/actions";

let fkPlatformActive = true;

let fkPlatform = {};

try {
  fkPlatform = new FKPlatform("hipbar");
} catch (e) {
  fkPlatformActive = false;
}

/* TODO:@hl05 better error management */
//
/* TODO:@hl05 making it work with regular web */

// { scope: "user.name", isMandatory: true, shouldVerify: true },
//{ scope: "user.email", isMandatory: false, shouldVerify: false },
//{ scope: "user.location", isMandatory: false, shouldVerify: false },

var scopeReq = [
  { scope: "user.mobile", isMandatory: true, shouldVerify: true },
  { scope: "user.location", isMandatory: false, shouldVerify: false },
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
      dispatch(fetchGrantTokenSuccess(gt));
      loginHandler(gt, dispatch);
    })
    .catch(() => {
      const message = "Please provide necessary permissions to use HipBar";
      dispatch(fetchGrantTokenFailed(message));
    });
};

const guessAddress = (gps) => {
  return (dispatch) => {
    dispatch(guessAddressInProgress());
    var data = {};
    if (!gps) {
      dispatch(guessAddressSuccess(data));
    }
    guessAddressAPI(
      gps,
      processGuessAddressResponse(dispatch),
      onGuessAddressSuccess(dispatch),
      onGuessAddressError(dispatch)
    );
  };
};

const processGuessAddressResponse = () => {
  return (res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error("Something went wrong, try again");
  };
};

const onGuessAddressSuccess = (dispatch) => {
  return (data) => {
    if (data.city) {
      if (data.city.fk_enabled && data.state.fk_enabled) {
        dispatch(selectState(data.state));
        dispatch(selectCity(data.city));
        if (data.address) {
          data.address.address_id = data.address.id;
          data.address.city = data.city;
          data.address.state = data.state;
          dispatch(selectAddressAction(data.address));
        }
        dispatch(guessAddressSuccess(data));
      }
    }
  };
};

const onGuessAddressError = (dispatch) => {
  return (err) => {
    dispatch(guessAddressFailed(err));
  };
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

export { login, guessAddress, exitToFk };
