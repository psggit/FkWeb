import { connect } from "react-redux";
import { AgreeAndContinueComponent } from "./agreeAndContinueComponent";
import { agreeTandC, checkTC } from "./duck";

const mapStateToProps = (state, props) => {
  return {
    showTC: state.tcStore.showTC,
    redirect: props.match.params.redirect,
    selectedAddress: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    agreeTc: () => dispatch(agreeTandC()),
    checkTC: () => dispatch(checkTC()),
  };
};

const AgreeAndContinueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgreeAndContinueComponent);

export { AgreeAndContinueContainer };
