import { connect } from "react-redux";
import { HomeComponent } from "./HomeComponent";
import { GetCurrentOrdersOperation } from "./duck";

const mapStateToProps = (state) => {
  return {
    getCurrentOrderInProgress:
      state.home.currentOrder.getCurrentOrderInProgress,
    getCurrentOrderSuccess: state.home.currentOrder.getCurrentOrderSuccess,
    getCurrentOrderFailed: state.home.currentOrder.getCurrentOrderFailed,
    currentOrder: state.home.currentOrder.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentOrdersFunc: (value) => dispatch(GetCurrentOrdersOperation(value)),
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export { HomeContainer };
