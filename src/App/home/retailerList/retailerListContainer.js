import { connect } from "react-redux";
import { RetailerList } from "./retailerListComponent";

const mapStateToProps = (state) => {
  return { name: state.home.retailerList.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const RetailerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RetailerList);

export { RetailerListContainer };
