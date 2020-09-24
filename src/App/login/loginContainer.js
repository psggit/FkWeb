import { connect } from "react-redux";
import { LoginComponent } from "./loginComponent";
import { login, exitToFk, guessAddress } from "./duck";
import { updateDeviceGps } from "./duck/actions";

// TODO:
// import Address Guessers
const mapStateToProps = (state, props) => {
  return {
    selectedAddress: state.addressStore.selectedAddress,
    userInfo: state.login.userInfo,
    deviceGps: state.login.deviceGps,
    guessAddressInfo: state.login.guessAddressInfo,
    guessAddressSuccess: state.login.guessAddressSuccess,
    guessAddressInProgress: state.login.guessAddressInProgress,
    guessAddressFailed: state.login.guessAddressFailed,
    locationPermission: state.login.locationPermission,
    loginInProgress: state.login.loginInProgress,
    loginSuccess: state.login.loginSuccess,
    loginFailed: state.login.loginFailed,
    showError: state.login.showError,
    errorMessage: state.login.errorMessage,
    grantTokenError: state.login.grantTokenError,
    grantTokenErrorMessage: state.login.grantTokenErrorMessage,
    redirect: props.match.params.redirect,
    showTC: state.tcStore.showTC,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    guessAddress: (gps) => dispatch(guessAddress(gps)),
    exitToFk: () => dispatch(exitToFk()),
    setDeviceGps: (gps) => dispatch(updateDeviceGps(gps)),
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export { LoginContainer };
