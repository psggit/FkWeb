import { selectCity, selectState } from "./actions";

export const locationLocalStorageHandler = (state, action) => {
  if (action.type === selectState.type) {
    localStorage.setItem("selectedState", JSON.stringify(action.payload));
  }
  if (action.type === selectCity.type) {
    localStorage.setItem("selectedCity", JSON.stringify(action.payload));
  }
};
