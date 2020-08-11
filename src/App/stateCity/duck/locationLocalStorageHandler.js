import { selectCity, selectState } from "./actions";

export const locationLocalStorageHandler = (state, action) => {
  if (action.type === selectState.type) {
    localStorage.setItem("selectState", JSON.stringify(action.payload));
  }
  if (action.type === selectCity.type) {
    localStorage.setItem("selectCity", JSON.stringify(action.payload));
  }
};
