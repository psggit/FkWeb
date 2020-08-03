import {
  fetchSummaryInProgress,
  fetchSummaryFailed,
  fetchSummarySuccess,
} from "./actions";

import { fetchSummaryAPI } from "../../../utils";

const reqBodyFromState = (summaryState) => {
  let products = [];
  for (let prod of Object.values(summaryState.products)) {
    let p = {
      count: prod.count,
      sku_id: prod.skuId,
    };
    products.push(p);
  }
  return {
    address_id: summaryState.selectedAddress.address_id,
    city_id: summaryState.selectedAddress.city.id,
    state_id: summaryState.selectedAddress.state.id,
    retailer_id: summaryState.retailer.id,
    products: products,
    is_validation: false,
    order_type: "delivery",
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
    dispatch(fetchSummarySuccess(data));
  };
};

const onError = (dispatch) => {
  return (err) => {
    console.log(err);
    dispatch(fetchSummaryFailed(err));
  };
};

const fetchSummary = (summaryState) => {
  let reqBody = reqBodyFromState(summaryState);
  return (dispatch) => {
    dispatch(fetchSummaryInProgress());
    fetchSummaryAPI(
      reqBody,
      processResponse(dispatch),
      onSuccess(dispatch),
      onError(dispatch)
    );
  };
};

export { fetchSummary };
