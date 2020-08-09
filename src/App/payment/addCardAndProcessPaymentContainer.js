import { connect } from "react-redux";

import { AddCardAndProcessPayment } from "./AddCardAndProcessPayment";

import { jpNewCardConf } from "./duck";

const mapStateToProps = (state) => {
  return {
    retailer: state.cart.retailer,
    products: state.cart.products,
    selectedAddress: state.addressStore.selectedAddress,
    payment: state.payment,
    summaryDetails: state.summaryDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    jpNewCardConf: (ps) => dispatch(jpNewCardConf(ps)),
  };
};

const AddCardAndProcessPaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardAndProcessPayment);

export { AddCardAndProcessPaymentContainer };
