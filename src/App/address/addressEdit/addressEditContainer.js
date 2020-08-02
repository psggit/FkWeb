import { connect } from "react-redux";
import { AddressEditComponent } from "./addressEditComponent.jsx";
// Import Operations
const mapStateToProps = (state) => {
  return {
    address: state.chooseLocation.selectedMapAddress,
    mapCenterGps:state.chooseLocation.selectedGps,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const AddressEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressEditComponent);

export { AddressEditContainer };
