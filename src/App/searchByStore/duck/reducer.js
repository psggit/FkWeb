import {
  getSearchByStoreFailed,
  getSearchByStoreSuccess,
  getSearchByStoreInWaiting,
  getSearchByStoreInProgress,
} from "./action";

const initialState = {
  pending: false,
  data: [],
  error: "",
};

function searchByStoreReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case getSearchByStoreInWaiting:
      newState = { ...state, pending: true };
      return newState;
    case getSearchByStoreInProgress:
      newState = { ...state, pending: true };
      return newState;
    case getSearchByStoreSuccess:
      newState = { ...state, data: action.payload.brand_list, pending: false };
      return newState;
    case getSearchByStoreFailed:
      newState = { ...state, error: action.payload, pending: false };
      return newState;
    default:
      return state;
  }
}

export { searchByStoreReducer };
