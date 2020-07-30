import { connect } from "react-redux";
import { RetailerList } from "./retailerListComponent";
import { fetchRetailersOperation } from "./duck";

const mapStateToProps = (state) => {
  return {
    retailers: state.home.retailerList.retailers,
    retailerFetchStatus: state.home.retailerList.retailerFetchStatus,
    selectedAddress: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRetailersFunc: (selectedAddress) =>
      dispatch(fetchRetailersOperation(selectedAddress)),
  };
};

const RetailerListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RetailerList);

export { RetailerListContainer };
