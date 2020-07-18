import {
  validateSuccessful,
  validateInProgress,
  validationFailure,
} from "./actions";
import { updateCartAPI } from "../../../../utils";

const reqBodyFromState = (cartState) => {
  let products = [];
  for (let id in cartState.products) {
    let p = {
      count: cartState.products[id].count,
      sku_id: cartState.products[id].skuId,
    };
    products.push(p);
  }
  return JSON.stringify({
    city_id: 5,
    retailer_id: cartState.retailer.id,
    state_id: 4,
    products: products,
  });
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(validationFailure());
      return res.json();
    }
    if (res.status === 400) {
      throw "invalid params";
    } else {
      throw "Something went wrong, try again.";
    }
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(validateSuccessful(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    dispatch(validationFailure(err));
  };
};

const validateCart = (cartState) => {
  let reqBody = reqBodyFromState(cartState);
  return (dispatch) => {
    dispatch(validateInProgress);
    updateCartAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { validateCart };
