import { connect } from "react-redux";
import { AddressEditComponent } from "./addressEditComponent.jsx";
// Import Operations
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

const AddressEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressEditComponent);

export { AddressEditContainer };
