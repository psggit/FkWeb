import { connect } from "react-redux";
import { OrderInfoComponent } from "./orderInfoComponent";

const mapStateToProps = (state, props) => {
  return {
    order: props.location.state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrderDetailsFunc: (value) => dispatch(value),
  };
};

const OrderInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderInfoComponent);

export { OrderInfoContainer };
