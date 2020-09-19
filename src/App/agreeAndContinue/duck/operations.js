import { tcAgreed } from "./actions";

const setTc = () => {
  localStorage.setItem("tandc/status", "true");
};

const checkTC = () => {
  return (dispatch) => {
    var agreed = localStorage.getItem("tandc/status");
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
