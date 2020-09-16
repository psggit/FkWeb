import { connect } from "react-redux";
import { LoginComponent } from "./loginComponent";
import { login, exitToFk } from "./duck";

const mapStateToProps = (state, props) => {
  return {
    selectedAddress: state.addressStore.selectedAddress,
    userInfo: state.login.userInfo,
    loginInProgress: state.login.loginInProgress,
    loginSuccess: state.login.loginSuccess,
    loginFailed: state.login.loginFailed,
    showError: state.login.showError,
    errorMessage: state.login.errorMessage,
    grantTokenError: state.login.grantTokenError,
    grantTokenErrorMessage: state.login.grantTokenErrorMessage,
    redirect: props.match.params.redirect,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    exitToFk: () => dispatch(exitToFk()),
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export { LoginContainer };
