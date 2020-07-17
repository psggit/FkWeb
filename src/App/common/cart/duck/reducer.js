/* @flow */
import { addSkuToCart, removeSkuFromCart } from "./actions";

import { createReducer } from "@reduxjs/toolkit";

var Retailer: {
  id: number,
  name: string,
  description: string,
};

var Product: {
  skuId: number,
  brandName: string,
  brandId: number,
  price: number,
  volume: number,
  count: number,
  available: boolean,
  subText: string,
};

var Products: {
  skuId: Product,
};

var State: {
  retailer: Retailer,
  products: Products,
  retailerDiffers: boolean,
};

var Sku: {
  retailerId: number,
  retailerName: string,
  retailerDescription: string,
  sku_id: number,
  brand_name: string,
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
  };
};

let addProduct = (state: State, sku: sku): state => {
  // handle existing retailer
  if (sku.retailerId !== state.retailer.id) {
    if (sku.clearCart === false) {
      state.set("retailerDiffers", true);
      return state;
    }
    state.set("retailer", {
      id: sku.retailerId,
      name: sku.retailerName,
      description: sku.retailerDescription,
    });
    state.set("products", {});
    state.set("retailerDiffers", false);
  }

  // set product details
  let prod = state.products.get(sku.sku_id);
  //if doesn't exist, create one and add it to the map
  if (prod === undefined) {
    prod = {
      skuId: sku.sku_id,
      brandName: sku.brand_name,
      brandId: sku.brand_id,
      price: sku.price,
      volume: sku.volume,
      count: 1,
      available: true,
      subText: "",
    };
  } else {
    prod.count += 1;
  }
  state.products.set(prod.skuId, prod);
  return state;
};

let removeProduct = (state: State, sku: sku): state => {
  let prod = state.products.get(sku.sku_id);
  if (prod === undefined) {
    return state;
  } else {
    prod.count -= 1;
  }
  if (prod.count === 0) {
    state.products.delete(prod.skuId);
  }
  return state;
};

const cartTotal = (oldS: State): number => {
  let total: number = 0;
  for (let prod of oldS.products.values()) {
    total = total + prod.total;
  }
  return total;
};

const initialState = getTestState;

const cartReducer = createReducer(initialState, {
  [addSkuToCart]: (state: State, e: Sku): State => addProduct({ ...state }, e),
  [removeSkuFromCart]: (state: State, e: Sku): State =>
    removeProduct({ ...state }, e),
});

export { cartReducer, cartTotal };
