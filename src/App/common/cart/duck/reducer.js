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
  image: string,
  price: number,
  volume: number,
  count: number,
  available: boolean,
  subText: string,
  logoLowResImage: string,
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
        subText: "",
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

let addProduct = (state: State, sku: Sku): state => {
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
  let prod = state.products[sku.sku_id.toString()];
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
      subText: "",
    };
  } else {
    prod.count += 1;
  }
  state.products[prod.skuId.toString()] = prod;
  return state;
};

let removeProduct = (state: State, sku: sku): state => {
  let prod = state.products[sku.sku_id.toString()];
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

const cartTotal = (oldS: State): number => {
  let total: number = 0;
  for (let prod of oldS.products.values()) {
    total = total + prod.total;
  }
  return total;
};

const cartReducer = createReducer(initialState(), {
  [addSkuToCart]: (state: State, e: Sku): State => {
    return void addProduct({ ...state }, e.payload);
  },

  [removeSkuFromCart]: (state: State, e: Sku): State => {
    return void removeProduct({ ...state }, e.payload);
  },
});

export { cartReducer, cartTotal, isEmpty };
