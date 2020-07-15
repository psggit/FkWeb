import { connect } from "react-redux";
import { IframeComponent } from "./iframeComponent";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const IframeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IframeComponent);

export { IframeContainer };
