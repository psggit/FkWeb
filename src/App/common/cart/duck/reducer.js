/* @flow */
import {
  addSkuToCart,
  removeSkuFromCart,
  validationSuccessful,
  validationInProgress,
  validationFailure,
  closeSummaryAlert,
  clearCartAndAdd,
  dontClearCart,
  resetOnUnmount,
  clearCart,
  fetchSummaryInProgress,
  fetchSummaryFailed,
  fetchSummarySuccess,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const unAvailableProductText = "Product is not available";

declare type Retailer = {
  id: number,
  name: string,
  description: string,
  fssaiNo: string,
};

declare type Product = {
  skuId: number,
  brandName: string,
  brandId: number,
  image: string,
  price: number,
  volume: number,
  count: number,
  available: boolean,
  subText: string,
};

declare type Products = {
  [skuId: string]: Product,
};

declare type State = {
  retailer: Retailer,
  products: Products,
  retailerDiffers: boolean,
  validationFailure: boolean,
  validationSuccessful: boolean,
  validationInProgress: boolean,
  validateError: boolean,
  validateErrorMessage: string,
  redirect: boolean,
  fetchSummaryInProgress: boolean,
  fetchSummaryFailed: boolean,
  fetchSummarySuccess: boolean,
  fetchSummaryError: boolean,
  fetchSummaryLocationError: boolean,
  fetchSummaryErrorMessage: string,
  pendingSku: Sku,
};

declare type Sku = {
  retailerId: number,
  retailerName: string,
  retailerDescription: string,
  sku_id: number,
  brand_name: string,
  logo_low_res_image: string,
  brand_id: number,
  price: number,
  volume: number,
  clearCart: boolean,
};

const getCartFromStore = () => {
  try {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);
    return { retailer: cart.retailer, products: cart.products };
  } catch {
    return { retailer: {}, products: {} };
  }
};

const initialState = (): State => {
  let { retailer, products } = getCartFromStore();
  return {
    retailer: retailer,
    products: products,
    summaryDetails: {},
    retailerDiffers: false,
    validationFailure: false,
    validationInProgress: false,
    validationSuccessful: false,
    validateError: false,
    validateErrorMessage: "",
    redirect: false,
    pendingSku: {},
    fetchSummaryInProgress: false,
    fetchSummaryFailed: false,
    fetchSummarySuccess: false,
    fetchSummaryError: false,
    fetchErrorMessageCount: 0,
    fetchSummaryErrorMessage: "",
    cartUpdate: false,
  };
};

let setRetailer = (state: State, sku: Sku): State => {
  state["retailer"] = {
    id: sku.retailerId,
    name: sku.retailerName,
    description: sku.retailerDescription,
    fssaiNo: sku.retailerFssaiNo,
  };
  return state;
};

let resetValidationState = (state: State): State => {
  state.retailerDiffers = false;
  state.redirect = false;
  state.pendingSku = {};
  state.fetchSummaryInProgress = false;
  state.fetchSummaryFailed = false;
  state.fetchSummarySuccess = false;
  state.fetchSummaryError = false;
  // state.fetchErrorMessageCount = 0;
  state.fetchSummaryErrorMessage = "";
  return state;
};

let resetState = (state: State): State => {
  state.retailer = {};
  state.products = {};
  state.retailerDiffers = false;
  state = resetValidationState(state);
  state.pendingSku = {};
  state.cartUpdate = false;
  return state;
};

let isEmpty = (state: State): boolean => {
  return Object.keys(state.products).length === 0;
};

let getProductFromSku = (sku: Sku): Product => {
  return {
    skuId: sku.sku_id,
    brandName: sku.brand_name,
    brandId: sku.brand_id,
    image: sku.logo_low_res_image,
    price: sku.price,
    volume: sku.volume,
    count: 1,
    available: true,
    subText: unAvailableProductText,
  };
};

let addProduct = (state: State, sku: Sku): State => {
  // handle existing retailer
  if (isEmpty(state)) {
    state = setRetailer(state, sku);
  } else if (sku.retailerId !== state.retailer.id) {
    if (sku.clearCart === false) {
      state.retailerDiffers = true;
      state.pendingSku = sku;
      return state;
    }
    state = resetState(state);
    state = setRetailer(state, sku);
  }

  // set product details
  let prod = state.products[sku.sku_id.toString()];
  // set product details
  //if doesn't exist, create one and add it to the map
  if (prod === undefined) {
    prod = getProductFromSku(sku);
  } else {
    prod.count += 1;
  }
  state.products[prod.skuId.toString()] = prod;
  state.cartUpdate = true;
  state = resetValidationState(state);
  return state;
};

let removeProduct = (state: State, sku: Sku): State => {
  let prod = state.products[sku.sku_id.toString()];
  if (prod === undefined) {
    return state;
  } else {
    prod.count -= 1;
  }
  if (prod.count === 0) {
    delete state.products[prod.skuId.toString()];
  }
  state.cartUpdate = true;
  state = resetValidationState(state);
  return state;
};

let replaceProductInfo = (state: State, skus: Array<Sku>): State => {
  for (let sku of skus) {
    state.products[sku.sku_id.toString()] = {
      skuId: sku.sku_id,
      brandName: sku.brand_name,
      brandId: sku.brand_id,
      image: sku.logo_low_res_image,
      price: sku.price,
      volume: sku.volume,
      count: state.products[sku.sku_id.toString()].count,
      available: true,
      subText: unAvailableProductText,
    };
  }
  return state;
};

let setUnAvailableProducts = (state: State, skus: Array<number>): State => {
  for (let id of skus) {
    state.products[id.toString()].available = false;
  }
  return state;
};

let setAvailableProducts = (state: State): State => {
  for (let prod: Product of Object.values(state.products)) {
    state.products[prod.skuId.toString()].available = true;
  }
  return state;
};
// let validateCart = (state: State, data: Object): State => {
//   if (data.unavailableItems !== undefined) {
//     state = setUnAvailableProducts(state, data.unAvailableItems);
//   } else if (data.unavail_items !== undefined) {
//     state = setUnAvailableProducts(state, data.unavail_items);
//   }

//   state.validationFailure = false;
//   state.retailer.description = data.delivery_message;
//   if (data.statusCode === 0) {
//     console.log("validationIF", data);
//     state = replaceProductInfo(state, data.products);
//     state.validateError = false;
//     state.validateErrorMessage = "";
//     state.validationSuccessful = true;
//     state.validationInProgress = false;
//   } else {
//     console.log("validationError", data);
//     state.validateError = true;
//     state.validateErrorMessage = data.message;
//     state.validationSuccessful = false;
//     state.validationInProgress = false;
//   }
//   return state;
// };

const cartTotal = (oldS: State): number => {
  let total: number = 0;
  for (let prod: Product of Object.values(oldS.products)) {
    total = total + prod.price;
  }
  return total;
};

const handleSummarySuccess = (state: State, data: Object): State => {
  state = setAvailableProducts(state);
  if (data.unavailableItems != null) {
    state = setUnAvailableProducts(state, data.unavailableItems);
  } else if (data.unavail_items != null) {
    state = setUnAvailableProducts(state, data.unavail_items);
  }

  if (data.statusCode === 0) {
    //success
    state.summaryDetails = data.summary_details;
    state.fetchSummaryInProgress = false;
    state.fetchSummaryFailed = false;
    state.fetchSummarySuccess = true;
    state.fetchSummaryError = false;
    state.fetchSummaryErrorMessage = "";
    state.fetchErrorMessageCount = 0;
    state.cartUpdate = false;
  } else {
    //summary error
    state.summaryDetails = data.summary_details;
    state.fetchSummaryInProgress = false;
    state.fetchSummaryFailed = false;
    state.fetchSummarySuccess = true;
    state.fetchSummaryError = true;
    state.fetchSummaryErrorMessage = data.message;
    state.cartUpdate = false;
  }
  return state;
};

const cartReducer = createReducer(initialState(), {
  [addSkuToCart]: (state: State, e: Object) => {
    return void addProduct(state, e.payload);
  },
  [removeSkuFromCart]: (state: State, e: Object) => {
    return void removeProduct(state, e.payload);
  },
  [validationSuccessful]: (state: State, e: Object) => {
    return void validateCart(state, e.payload);
  },
  [validationInProgress]: (state: State): State => {
    return {
      ...state,
      validationFailure: false,
      validationSuccessful: false,
      validationInProgress: true,
      validateError: false,
      validateErrorMessage: "",
    };
  },

  [validationFailure]: (state: State): State => {
    return {
      ...state,
      validationFailure: true,
      validationSuccessful: false,
      validationInProgress: false,
      validateError: false,
      validateErrorMessage: "",
    };
  },

  [fetchSummaryInProgress]: (state: State): State => {
    return {
      ...state,
      fetchSummaryInProgress: true,
      fetchSummaryFailed: false,
      fetchSummarySuccess: false,
      cartUpdate: false,
    };
  },

  [fetchSummaryFailed]: (state: State): State => {
    return {
      ...state,
      fetchSummaryInProgress: false,
      fetchSummaryFailed: true,
      fetchSummarySuccess: false,
      cartUpdate: false,
    };
  },

  [fetchSummarySuccess]: (state: State, e: Object) => {
    return void handleSummarySuccess(state, e.payload);
  },

  [closeSummaryAlert]: (state: State): State => {
    state.fetchErrorMessageCount = 1;
    return state;
  },

  [clearCartAndAdd]: (state: State) => {
    state.pendingSku.clearCart = true;
    return void addProduct(state, state.pendingSku);
  },

  [dontClearCart]: (state: State): State => {
    return {
      ...state,
      retailerDiffers: false,
      pendingSku: {},
    };
  },

  [resetOnUnmount]: (state: State): State => {
    return resetValidationState(state);
  },
  [clearCart]: (state: State): State => {
    return {
      ...state,
      retailer: {},
      products: {},
    };
  },
});

export { cartReducer, cartTotal, isEmpty };
