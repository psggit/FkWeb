import { connect } from "react-redux";
import { IframeComponent } from "./iframeComponent";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

const IframeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IframeComponent);

export { IframeContainer };
