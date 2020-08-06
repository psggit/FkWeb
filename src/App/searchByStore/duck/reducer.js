import {
  getSearchByStoreFailed,
  getSearchByStoreSuccess,
  getSearchByStoreInWaiting,
  getSearchByStoreInProgress,
} from "./action";

const initialState = {
  status: "waiting",
  data: [],
  error: "",
};

function searchByStoreReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case getSearchByStoreInWaiting:
      newState = { ...state, status: "waiting" };
      return newState;
    case getSearchByStoreInProgress:
      newState = { ...state, status: "progress" };
      return newState;
    case getSearchByStoreSuccess:
      newState = {
        ...state,
        data: action.payload.brand_list,
        status: "success",
      };
      return newState;
    case getSearchByStoreFailed:
      newState = { ...state, error: action.payload, status: "failed" };
      return newState;
    default:
      return state;
  }
}

export { searchByStoreReducer };
