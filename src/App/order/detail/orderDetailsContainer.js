import { connect } from "react-redux";
import { OrderDetailsComponent } from "./orderDetailsComponent";
import { OrderDetailOperation } from "./duck";

const mapStateToProps = (state, props) => {
  return {
    fetchOrderDetailInProgress: state.order.fetchOrderDetailInProgress,
    fetchOrderDetailFailed: state.order.fetchOrderDetailFailed,
    fetchOrderDetailSuccess: state.order.fetchOrderDetailSuccess,
    orderDetail: state.order.orderDetail,
    order: props.location.state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderDetailsFunc: (value) => dispatch(OrderDetailOperation(value)),
  };
};

const OrderDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsComponent);

export { OrderDetailsContainer };
