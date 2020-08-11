import {
  validationSuccessful,
  validationInProgress,
  validationFailure,
} from "./actions";
import { validateCartAPI } from "../../../../utils";

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
    city_id: cartState.selectedAddress.city.id,
    state_id: cartState.selectedAddress.state.id,
    retailer_id: cartState.retailer.id,
    products: products,
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
    validateCartAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { validateCart };
