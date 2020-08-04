import { connect } from "react-redux";
import { SearchByStoreComponent } from "./SearchByStoreComponent";
import { getSearchByStore } from "./duck";

const mapStateToProps = (state, props) => {
  console.log(state);
  const {
    searchByStore: { data, pending },
  } = state;
  return { data, pending, retailer: props.location.state.retailer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchByStore: (value) => dispatch(getSearchByStore(value)),
  };
};

const SearchByStoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByStoreComponent);

export { SearchByStoreContainer };
