import {
  validationSuccessful,
  validationInProgress,
  validationFailure,
} from "./actions";
import { updateCartAPI } from "../../../../utils";

const reqBodyFromState = (cartState) => {
  let products = [];
  for (let prod of Object.values(cartState.products)) {
    let p = {
      count: prod.count,
      sku_id: prod.skuId,
    };
    products.push(p);
  }
  return {
    city_id: 5,
    retailer_id: cartState.retailer.id,
    state_id: 1,
    products: products,
  };
};

const processResponse = (dispatch) => {
  return (res) => {
    if (res.ok) {
      dispatch(validationFailure());
      return res.json();
    }
    if (res.status === 400) {
      //TODO:@hl05 setup sentry here?
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  };
};

const onSuccess = (dispatch) => {
  return (data) => {
    dispatch(validationSuccessful(data));
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
    dispatch(validationInProgress());
    updateCartAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { validateCart };
