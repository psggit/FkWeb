import {
  createOrderInProgress,
  createOrderFailed,
  createOrderSuccess,
} from "./actions";

import { createOrderAPI } from "../../../utils";
const reqBodyFromState = (paymentState) => {
  let products = [];
  for (let prod of Object.values(paymentState.products)) {
    let p = {
      count: prod.count,
      sku_id: prod.skuId,
    };
    products.push(p);
  }
  return {
    address_id: paymentState.selectedAddress.address_id,
    city_id: paymentState.selectedAddress.city.id,
    state_id: paymentState.selectedAddress.state.id,
    retailer_id: paymentState.retailer.id,
    products: products,
    is_validation: false,
    order_type: "delivery",
    promo_code: paymentState.promoName,
  };
};

const processResponse = () => {
  return (res) => {
    if (res.ok) {
      return res.json();
    }
    if (res.status === 400) {
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    //dispatch(createOrderFailed(data));
    dispatch(createOrderSuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(createOrderFailed(err));
  };
};

const createOrder = (paymentState) => {
  let reqBody = reqBodyFromState(paymentState);
  return (dispatch) => {
    dispatch(createOrderInProgress());
    createOrderAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { createOrder };
