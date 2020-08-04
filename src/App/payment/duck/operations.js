import { initialTrigger } from "./actions";

import { fetchPaymentOptions } from "./fetchPaymentOptions";
import { createOrder } from "./createOrder";

const initialise = (paymentState) => {
  return (dispatch) => {
    dispatch(initialTrigger());
    createOrder(paymentState)(dispatch);
    fetchPaymentOptions(paymentState)(dispatch);
  };
};

export { initialise };
