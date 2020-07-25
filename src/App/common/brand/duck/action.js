import {searchDrinkAPI} from '../../../../utils';

export function getSearchDrinks(query){
    const reqBody={
        "city_id":5,
        "offset":0,
        "gps":"13.011557355101441,80.25409296154976",
        "query":query,
        "limit":5,
        "state_id":4
    }
    return async dispatch =>{
        dispatch(searchDrinksPending());
        try{
            const res= await searchDrinkAPI(reqBody);
            if(res.error){
                throw res.error
            }
            dispatch(searchDrinksSuccess(res));
        }
        catch(error){
            dispatch(searchDrinksFailure(error))
        }
    }
  };

  export function searchDrinksPending(){
      return{
          type:'PENDING'
      }
  }
  export function searchDrinksSuccess(data){
    return{
        type:'SUCCESS',
        payload:data
    }
}
export function searchDrinksFailure(error){
    return{
        type:'FAILURE',
        payload:error
    }
}