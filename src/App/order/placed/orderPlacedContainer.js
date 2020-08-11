import { connect } from "react-redux";
import { OrderPlacedComponent } from "./orderPlacedComponent";
import { clearCart } from "../../common/cart";

const mapStateToProps = (state) => {
  return {
    payment: state.payment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};

const OrderPlacedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPlacedComponent);

export { OrderPlacedContainer };
