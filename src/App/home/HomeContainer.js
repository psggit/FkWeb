import { connect } from "react-redux";
import { HomeComponent } from "./HomeComponent";
import { GetCurrentOrdersOperation, getCurrentOrderInProgress } from "./duck";

const mapStateToProps = (state) => {
  return {
    getCurrentOrderInProgress:
      state.home.currentOrder.getCurrentOrderInProgress,
    getCurrentOrderSuccess: state.home.currentOrder.getCurrentOrderSuccess,
    getCurrentOrderFailed: state.home.currentOrder.getCurrentOrderFailed,
    currentOrder: state.home.currentOrder.order,
    address: state.addressStore.selectedAddress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentOrdersFunc: () => dispatch(GetCurrentOrdersOperation()),
    currentOrderInProgress: () => dispatch(getCurrentOrderInProgress()),
  };
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export { HomeContainer };
