import { connect } from "react-redux";
import { UserBasicInfoComponent } from "./userBasicInfoComponent";
import { login, agreeTandC } from "./duck";

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
  };
};

const UserBasicInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBasicInfoComponent);

export { UserBasicInfoContainer };
