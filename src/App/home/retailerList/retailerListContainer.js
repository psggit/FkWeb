import { connect } from "react-redux";
import { RetailerList } from "./retailerListComponent";
import { onHarshit, waitForSyed } from "./duck";

const mapStateToProps = (state) => {
  return { name: state.home.retailerList.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSyed: () => dispatch(waitForSyed()),
    onHarshit: () => dispatch(onHarshit()),
  };
};

const RetailerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RetailerList);

export { RetailerListContainer };
