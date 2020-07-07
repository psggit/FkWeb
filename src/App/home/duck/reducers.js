import { syed, harshit } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const nameReducer = createReducer(
  { name: "default" },
  {
    [syed]: (state) => (state.name = "syed"),
    [harshit]: (state) => (state.name = "harshit"),
  }
);

export default nameReducer;
