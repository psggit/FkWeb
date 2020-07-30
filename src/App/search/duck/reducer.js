const initialState = {
  pending: false,
  data: [],
  error: "",
};

function searchDrinkReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "PENDING":
      newState = { ...state, pending: true };
      return newState;
    case "SUCCESS":
      newState = { ...state, data: action.payload.retailers, pending: false };
      return newState;
    case "FAILURE":
      newState = { ...state, error: action.payload, pending: false };
      return newState;
    default:
      return state;
  }
}

export { searchDrinkReducer };
