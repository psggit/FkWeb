import { createReducer } from "@reduxjs/toolkit";

import { tcAgreed } from "./actions";

const initialState = {
  showTC: !(localStorage.getItem("tandc/status") === "true"),
};

const tcReducer = createReducer(initialState, {
  [tcAgreed]: (state) => ({
    ...state,
    showTC: false,
  }),
});

export { tcReducer };
