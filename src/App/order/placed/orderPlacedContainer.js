import { connect } from "react-redux";
import { OrderPlacedComponent } from "./orderPlacedComponent";

const mapStateToProps = (state) => {
  return {
    payment: state.payment,
  };
};

const OrderPlacedContainer = connect(mapStateToProps)(OrderPlacedComponent);

export { OrderPlacedContainer };
