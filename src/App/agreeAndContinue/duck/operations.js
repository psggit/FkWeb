import { tcAgreed } from "./actions";

const setTc = () => {
  sessionStorage.setItem("tandc/status", "true");
};

const checkTC = () => {
  return (dispatch) => {
    var agreed = sessionStorage.getItem("tandc/status");
    if (agreed === "true") {
      dispatch(tcAgreed());
    }
  };
};

const agreeTandC = () => {
  return (dispatch) => {
    setTc();
    dispatch(tcAgreed());
  };
};

export { agreeTandC, checkTC };
