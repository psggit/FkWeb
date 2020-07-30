const initialState = {
  count: 0,
};

function skuItemReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "INCREMENT":
      newState = { ...state, count: state.count + 1 };
      return newState;
    case "DECREMENT":
      newState = { ...state, count: state.count - 1 };
      return newState;
    default:
      return state;
  }
}

export { skuItemReducer };
