const initialState = {
  status: "waiting",
  data: [],
  limit: 10,
  offset: 0,
  error: "",
};

function searchByStoreReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "searchRetailerWaiting":
      newState = { ...state, status: "waiting" };
      return newState;
    case "searchRetailerPending":
      newState = { ...state, status: "progress" };
      return newState;
    case "searchRetailerSuccess":
      newState = {
        ...state,
        data: action.payload.brand_list,
        offset: action.payload.NewOffset,
        status: "success",
      };
      return newState;
    case "searchRetailerPaginationSuccess":
      newState = {
        ...state,
        data: [...state.data, ...action.payload.brand_list],
        offset: action.payload.NewOffset,
        status: "success",
      };
      return newState;
    case "searchRetailerFailure":
      newState = { ...state, error: action.payload, status: "failed" };
      return newState;
    default:
      return state;
  }
}

export { searchByStoreReducer };
