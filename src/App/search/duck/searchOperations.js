import {
    getSearchDrinksSuccess,
    getSearchDrinksInProgress,
    getSearchDrinksFailed,
  } from "./action";
import {searchDrinkAPI} from '../../../utils';

  
  const reqBodyFromState = (query) => {
    return JSON.stringify({
      city_id: 5,
      offset:0,
      gps:"13.011557355101441,80.25409296154976",
      query: query,
      limit:5,
      state_id: 4,
    });
  };
  
  const processResponse = (dispatch) => {
    return (res) => {
      if (res.ok) {
        return res.json();
      }
      if (res.status === 400) {
        //TODO:@hl05 setup sentry here?
        throw new Error("invalid params");
      } else {
        throw new Error("Something went wrong, try again");
      }
    };
  };
  
  const onSuccess = (dispatch) => {
    return (data) => {
      dispatch(getSearchDrinksSuccess(data));
    };
  };
  
  const onError = (dispatch) => {
    return (err) => {
      dispatch(getSearchDrinksFailed(err));
    };
  };
 
  const getSearchDrinks = (query) => {
    let reqBody = reqBodyFromState(query);
    return (dispatch) => {
      dispatch(getSearchDrinksInProgress());
      searchDrinkAPI(
        reqBody,
        processResponse(dispatch),
        onSuccess(dispatch),
        onError(dispatch)
      );
    };
  };
  
  export { getSearchDrinks };