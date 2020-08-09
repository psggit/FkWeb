const genreInitialState = {
  pending: false,
  data: [],
  selectedGenre: null,
  error: "",
};

function genersReducer(state = genreInitialState, action) {
  let newState;
  switch (action.type) {
    case "PENDING":
      newState = { ...state, pending: true };
      return newState;
    case "CLEAR_STATE":
      return genreInitialState;
    case "CHANGE_GENRE":
      newState = { ...state, selectedGenre: action.payload};
      return newState;
    case "SUCCESS":
      if (action.payload.genres.length > 0) {
        let selectedGenre = action.payload.genres[0].id;
        newState = {
          ...state,
          data: action.payload.genres,
          selectedGenre: selectedGenre,
          pending: false,
        };
      } else {
        newState = { ...state, data: action.payload.genres, pending: false };
      }
      return newState;
    case "FAILURE":
      newState = { ...state, error: action.payload, pending: false };
      return newState;
    default:
      return state;
  }
}

const brandInitialState = {
  pending: false,
  data: [],
  error: "",
};

function brandGenerReducer(state = brandInitialState, action) {
  let newState;
  switch (action.type) {
    case "BRANDPENDING":
      newState = { ...state, pending: true };
      return newState;
    case "CLEAR_STATE":
      return brandInitialState;
    case "BRANDSUCCESS":
      newState = { ...state, data: action.payload.brands, pending: false };
      return newState;
    case "BRANDPAGINATIONSUCCESS":
      newState = {
        ...state,
        data: [...state.data, ...action.payload.brands],
        pending: false,
      };

      return newState;
    case "BRANDFAILURE":
      newState = { ...state, error: action.payload, pending: false };
      return newState;
    default:
      return state;
  }
}

export { genersReducer, brandGenerReducer };
