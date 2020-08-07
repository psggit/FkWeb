import { connect } from "react-redux";
import { BottomNavigationComponent } from "./BottomNavigationComponent";

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.products,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const BottomNavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomNavigationComponent);

export { BottomNavigationContainer };
