import { connect } from "react-redux";
import { MyOrdersComponent } from "./myOrdersComponent";
import { GetMyOrdersOperation } from "./duck";

const mapStateToProps = (state) => {
  return {
    myOrders: state.myOrdersStore.myOrders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyOrdersFunc: (value) => dispatch(GetMyOrdersOperation(value)),
  };
};

const MyOrdersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOrdersComponent);

export { MyOrdersContainer };
