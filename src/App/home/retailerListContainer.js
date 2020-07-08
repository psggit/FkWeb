import { connect } from "react-redux";
import { RetailerList } from "./retailerListComponent";
import { onSyed, onHarshit } from "./duck";

const mapStateToProps = (state) => {
  return { name: state.name.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSyed: () => dispatch(onSyed()),
    onHarshit: () => dispatch(onHarshit()),
  };
};

const RetailerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RetailerList);

export { RetailerListContainer };
