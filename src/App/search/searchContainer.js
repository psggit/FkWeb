import { connect } from "react-redux";
import { SearchComponent } from "./SearchComponent";
import { getSearchDrinks } from "./duck";

const mapStateToProps = (state) => {
  const {
    searchItem: { data, pending },
  } = state;
  return { data, pending };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchDrinks: (value) => dispatch(getSearchDrinks(value)),
  };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

export { SearchContainer };
