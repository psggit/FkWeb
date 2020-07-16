import { connect } from "react-redux";
import { AgreeAndContinueComponent } from "./agreeAndContinueComponent";
import { login, agreeTandC, checkTC } from "./duck";

const mapStateToProps = (state) => {
  return {
    showTC: state.tcStore.showTC,
    loginInProgress: state.tcStore.loginInProgress,
    loginSuccess: state.tcStore.loginSuccess,
    loginFailed: state.tcStore.loginFailed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    agreeTc: () => dispatch(agreeTandC()),
    checkTC: () => dispatch(checkTC()),
  };
};

const AgreeAndContinueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgreeAndContinueComponent);

export { AgreeAndContinueContainer };
