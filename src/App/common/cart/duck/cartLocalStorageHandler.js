import {
  addSkuToCart,
  removeSkuFromCart,
  clearCartAndAdd,
  clearCart,
} from "./actions";

const cartLocalStorageHandler = (store, action) => {
  // make a list of actions that we need to set the state for
  const setStateActions = [
    addSkuToCart.type,
    removeSkuFromCart.type,
    clearCartAndAdd.type,
    clearCart.type,
  ];
  //if the current action is part of the set, set the state
  if (setStateActions.indexOf(action.type) > -1) {
    const state = store.getState();
    localStorage.setItem(
      "cart",
      JSON.stringify({
        retailer: state.cart.retailer,
        products: state.cart.products,
      })
    );
  }
};

export { cartLocalStorageHandler };
