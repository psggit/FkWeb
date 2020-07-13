import { connect } from "react-redux";
import { AgreeAndContinueComponent } from "./agreeAndContinueComponent";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const AgreeAndContinueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AgreeAndContinueComponent);

export { AgreeAndContinueContainer };
