const initialState = {
  pending: false,
  data: [],
  error: "",
};

function searchDrinkReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "searchDrinksPENDING":
      newState = { ...state, pending: true };
      return newState;
    case "searchDrinksSUCCESS":
      newState = { ...state, data: action.payload.retailers, pending: false };
      return newState;
    case "searchDrinksFAILURE":
      newState = { ...state, error: action.payload, pending: false };
      return newState;
    default:
      return state;
  }
}

export { searchDrinkReducer };
