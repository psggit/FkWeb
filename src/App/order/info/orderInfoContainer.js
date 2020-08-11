import { connect } from "react-redux";
import { OrderInfoComponent } from "./orderInfoComponent";

const mapStateToProps = (state) => {
  return {
    order: state.home.currentOrder.order,
  };
};

const OrderInfoContainer = connect(mapStateToProps)(OrderInfoComponent);

export { OrderInfoContainer };
