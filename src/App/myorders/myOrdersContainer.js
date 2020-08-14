import { connect } from "react-redux";
import { MyOrdersComponent } from "./myOrdersComponent";
import { GetMyOrdersOperation, unMountAction } from "./duck";

const mapStateToProps = (state) => {
  return {
    orders: state.myOrders.myOrders,
    fetchOrderInProgress: state.myOrders.fetchOrderInProgress,
    fetchOrderFailed: state.myOrders.fetchOrderFailed,
    fetchOrderSuccess: state.myOrders.fetchOrderSuccess,
    offset: state.myOrders.offset,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyOrdersFunc: (value) => dispatch(GetMyOrdersOperation(value)),
    unMountAction: () => dispatch(unMountAction()),
  };
};

const MyOrdersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOrdersComponent);

export { MyOrdersContainer };
