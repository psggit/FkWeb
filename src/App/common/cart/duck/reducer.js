/* @flow */
import {
  addSkuToCart,
  removeSkuFromCart,
  validationSuccessful,
  validationInProgress,
  validationFailure,
  closeValidationErrorMessage,
} from "./actions";

import { createReducer } from "@reduxjs/toolkit";

const unAvailableProductText = "Product is not available";

declare type Retailer = {
  id: number,
  name: string,
  description: string,
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

/*
const getDefaultState = (): State => {
  return {
    retailer: {},
    products: {},
    retailerDiffers: false,
    validationFailure: false,
    validationInProgress: false,
    validationSuccessful: false,
    validateError: false,
    validateErrorMessage: "",

  };
};
*/

let getTestState = (): State => {
  return {
    retailer: {
      id: 436,
      name: "Gokul Arcade",
      description: "delivers very soon",
    },
    retailerDiffers: false,
    validationFailure: false,
    validationInProgress: false,
    validationSuccessful: false,
    validateError: false,
    validateErrorMessage: "",
    products: {
      "1276": {
        skuId: 1276,
        brandName: "Kf blue",
        brandId: 993,
        image:
          "https://res.cloudinary.com/www-hipbar-com/image/upload/c_scale,h_300/v1557824990/Brand%20Logo's/TN/Beer.jpg",
        price: 150,
        volume: 650,
        count: 2,
        available: true,
        subText: unAvailableProductText,
      },
    },
  };
};

const initialState = getTestState;

let setRetailer = (state: State, sku: Sku): State => {
  state["retailer"] = {
    id: sku.retailerId,
    name: sku.retailerName,
    description: sku.retailerDescription,
  };
  return state;
};

let isEmpty = (state: State): boolean => {
  return Object.keys(state.products).length === 0;
};

let addProduct = (state: State, sku: Sku): State => {
  // handle existing retailer
  if (sku.retailerId !== state.retailer.id) {
    if (sku.clearCart === false) {
      state["retailerDiffers"] = true;
      return state;
    }
    state = setRetailer(initialState(), sku);
  }

  if (isEmpty(state)) {
    state = setRetailer(initialState(), sku);
  }

  // set product details
  let prod = state.products[sku.sku_id];
  //if doesn't exist, create one and add it to the map
  if (prod === undefined) {
    prod = {
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
  } else {
    prod.count += 1;
  }
  state.products[prod.skuId.toString()] = prod;
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
  if (isEmpty(state)) {
    return initialState();
  }
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

let validateCart = (state: State, data: Object): State => {
  state = setUnAvailableProducts(state, data.unavailble_items);
  state.validationFailure = false;
  state.retailer.description = data.delivery_message;
  if (data.statusCode === 0) {
    state = replaceProductInfo(state, data.products);
    state.validateError = false;
    state.validateErrorMessage = "";
    state.validationSuccessful = true;
    state.validationInProgress = false;
  } else {
    state.validateError = true;
    state.validateErrorMessage = data.message;
    state.validationSuccessful = false;
    state.validationInProgress = false;
  }
  return state;
};

const cartTotal = (oldS: State): number => {
  let total: number = 0;
  for (let prod: Product of Object.values(oldS.products)) {
    total = total + prod.price;
  }
  return total;
};

const cartReducer = createReducer(initialState(), {
  [addSkuToCart]: (state: State, e: Object) => {
    return void addProduct({ ...state }, e.payload);
  },
  [removeSkuFromCart]: (state: State, e: Object) => {
    return void removeProduct({ ...state }, e.payload);
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
  [closeValidationErrorMessage]: (state: State): State => {
    return {
      ...state,
      validationFailure: false,
      validationSuccessful: false,
      validationInProgress: false,
      validateError: false,
    };
  },
});

export { cartReducer, cartTotal, isEmpty };
