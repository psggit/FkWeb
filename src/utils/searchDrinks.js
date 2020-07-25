import config from "../config";
import CommonHeaders from "./common";

const URL =
"https://cors-anywhere.herokuapp.com/"+"https://retailer." + config.BASE_DOMAIN + "/Api/stockandprice/search/locateDrinks";

const headers = { ...CommonHeaders, "Content-Type": "application/json" };

const searchDrinkAPI = async(reqBody) => {
 let response= await fetch(URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(reqBody),
  })
  try{
    if (response.ok) {
      return response.json();
    }
    if (res.status === 400) {
      //TODO:@hl05 setup sentry here?
      throw new Error("invalid params");
    } else {
      throw new Error("Something went wrong, try again");
    }
  }
  catch(err){
    return err
  }
};

export { searchDrinkAPI };
