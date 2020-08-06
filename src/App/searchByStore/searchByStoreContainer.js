import { connect } from "react-redux";
import { SearchByStoreComponent } from "./SearchByStoreComponent";
import { getSearchByStore } from "./duck";

const mapStateToProps = (state, props) => {
  console.log(state);
  const {
    searchByStore: { data, pending },
    addressStore: { selectedAddress },
  } = state;
  return {
    data,
    pending,
    selectedAddress,
    retailer: props.location.state.retailer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchByStore: (query, address, retailer) =>
      dispatch(getSearchByStore(query, address, retailer)),
  };
};

const SearchByStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByStoreComponent);

export { SearchByStoreContainer };
