import { connect } from "react-redux";
import { OrderPlacedComponent } from "./orderPlacedComponent";

const mapStateToProps = (state, props) => {
  return {
    order: props.location.state.order,
  };
};

const OrderPlacedContainer = connect(mapStateToProps)(OrderPlacedComponent);

export { OrderPlacedContainer };
