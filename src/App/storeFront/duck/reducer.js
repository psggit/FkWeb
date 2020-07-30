const initialState = {
  pending: false,
  data: [],
  error: "",
};

function genersReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "PENDING":
      newState = { ...state, pending: true };
      return newState;
    case "SUCCESS":
      newState = { ...state, data: action.payload.genres, pending: false };
      return newState;
    case "FAILURE":
      newState = { ...state, error: action.payload, pending: false };
      return newState;
    default:
      return state;
  }
}

function brandGenerReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "BRANDPENDING":
      newState = { ...state, pending: true };
      return newState;
    case "BRANDSUCCESS":
      newState = { ...state, data: action.payload.brands, pending: false };
      return newState;
    case "BRANDFAILURE":
      newState = { ...state, error: action.payload, pending: false };
      return newState;
    default:
      return state;
  }
}

export { genersReducer, brandGenerReducer };
