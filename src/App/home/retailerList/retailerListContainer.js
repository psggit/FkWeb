import { connect } from "react-redux";
import { RetailerList } from "./retailerListComponent";
import { fetchRetailersOperation, resetOnUnmount } from "./duck";

const mapStateToProps = (state) => {
  return {
    retailers: state.home.retailerList.retailers,
    message: state.home.retailerList.message,
    retailerFetchStatus: state.home.retailerList.retailerFetchStatus,
    selectedAddress: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRetailersFunc: (selectedAddress) =>
      dispatch(fetchRetailersOperation(selectedAddress)),
    resetOnUnmount: () => dispatch(resetOnUnmount()),
  };
};

const RetailerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RetailerList);

export { RetailerListContainer };
