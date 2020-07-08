import { onSyed, onHarshit } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const nameReducer = createReducer(
  { name: "default" },
  {
    [onSyed]: () => ({ name: "syed" }),
    [onHarshit]: () => ({ name: "harshit" }),
  }
);

export default nameReducer;
