import { connect } from "react-redux";

import { PaymentOptions } from "./PaymentOptions";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const PaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentOptions);

export { PaymentContainer };
