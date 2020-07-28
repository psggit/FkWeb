import { connect } from "react-redux";
import { AddressEditComponent } from "./addressEditComponent.jsx"
// Import Operations
const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (state) => {
  return {

  }
}

const AddressEditContainer = connect (
  mapStateToProps,
  mapDispatchToProps,
)(AddressEditComponent);

export { AddressEditContainer }
