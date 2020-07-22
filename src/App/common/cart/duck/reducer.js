/* @flow */
import {
  addSkuToCart,
  removeSkuFromCart,
  validationSuccessful,
  validationFailure,
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
  logoLowResImage: string,
};

declare type Products = {
  skuId: Product,
};

declare type State = {
  retailer: Retailer,
  products: Products,
  retailerDiffers: boolean,
  validationFailure: boolean,
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
    products: {
      "1276": {
        skuId: 1276,
        brandName: "Kf blue",
        brandId: 993,
        logo_low_res_image:
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
  state.products[prod.skuId] = prod;
  return state;
};

let removeProduct = (state: State, sku: Sku): State => {
  let prod = state.products[sku.sku_id];
  if (prod === undefined) {
    return state;
  } else {
    prod.count -= 1;
  }
  if (prod.count === 0) {
    delete state.products[prod.skuId];
  }
  if (isEmpty(state)) {
    return initialState();
  }
  return state;
};

let replaceProductInfo = (state: State, skus: Array<Sku>): State => {
  for (let sku of skus) {
    state.products[sku.sku_id] = {
      skuId: sku.sku_id,
      brandName: sku.brand_name,
      brandId: sku.brand_id,
      image: sku.logo_low_res_image,
      price: sku.price,
      volume: sku.volume,
      count: state.products[sku.sku_id].count,
      available: true,
      subText: unAvailableProductText,
    };
  }
  return state;
};

let setUnAvailableProducts = (state: State, skus: Array<number>): State => {
  for (let id of skus) {
    state.products[id].available = false;
  }
  return state;
};

let validateCart = (state: State, data: Object): State => {
  state = replaceProductInfo(state, data.products);
  state = setUnAvailableProducts(state, data.unavail_items);
  state.validationFailure = false;
  state.retailer.description = data.delivery_message;
  return state;
};

const cartTotal = (oldS: State): number => {
  let total: number = 0;
  for (let prod of Object.values(oldS.products)) {
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
  [validationSuccessful]: (state: State, data: Object) => {
    return void validateCart(state, data);
  },
  [validationFailure]: (state: State): State => {
    return { ...state, validationFailure: true };
  },
});

export { cartReducer, cartTotal, isEmpty };
