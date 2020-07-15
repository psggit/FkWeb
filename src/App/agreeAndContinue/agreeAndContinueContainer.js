import { connect } from "react-redux";
import { AgreeAndContinueComponent } from "./agreeAndContinueComponent";
import { login, agreeTandC } from "./duck";

const mapStateToProps = (state) => {
  return {
    showTC: state.tcStore.showTC,
    loginInProgress: state.tcStore.loginInProgress,
    loginSuccess: state.tcStore.loginSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(login()),
    agreeTc: () => dispatch(agreeTandC()),
  };
};

const AgreeAndContinueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgreeAndContinueComponent);

export { AgreeAndContinueContainer };
