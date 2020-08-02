const initialState = {
    pending: false,
    data:[],
    error:''
  };
  
  function searchByStoreReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
      case "PENDING":
        newState = { ...state, pending:true };
        return newState;
      case "SUCCESS":
        newState = { ...state, data:action.payload.brand_list,pending:false };
        return newState;
        case "FAILURE":
        newState = { ...state, error:action.payload,pending:false};
        return newState;
      default:
        return state;
    }
  }
  
  export { searchByStoreReducer };
  