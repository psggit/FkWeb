import { connect } from "react-redux";
import { SearchByStoreComponent } from "./SearchByStoreComponent";
import { getSearchByStore } from "./duck";

const mapStateToProps = (state, props) => {
  const {
    searchByStore: { data, status, limit, offset },
    addressStore: { selectedAddress },
  } = state;
  return {
    data,
    status,
    limit,
    offset,
    selectedAddress,
    retailer: props.location.state.retailer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchByStore: (query, address, retailer, limit, offset) =>
      dispatch(getSearchByStore(query, address, retailer, limit, offset)),
  };
};

const SearchByStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByStoreComponent);

export { SearchByStoreContainer };
