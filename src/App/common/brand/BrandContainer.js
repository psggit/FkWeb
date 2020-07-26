import { connect } from "react-redux";
import { BrandComponent } from "./BrandComponent";
import { getSearchDrinks } from "./duck";

const mapStateToProps = (state) => {
  const { searchItem: { data, pending }} = state;
  return { data,pending };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchDrinks: (value) => dispatch(getSearchDrinks(value)),
  };
};

const BrandContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandComponent);

export { BrandContainer };
