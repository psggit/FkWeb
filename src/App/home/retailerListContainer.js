import { connect } from "react-redux";
import { RetailerList } from "./retailerListComponent";
import { syed, harshit } from "./duck";

const mapStateToProps = (state) => {
  return { name: state.home.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSyed: () => dispatch(syed),
    onHarshit: () => dispatch(harshit),
  };
};

const RetailerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RetailerList);

export { RetailerListContainer };
