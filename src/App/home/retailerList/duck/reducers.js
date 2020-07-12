import { onSyed, onHarshit } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const retailerListReducer = createReducer(
  { name: "default" },
  {
    [onSyed]: () => ({ name: "Syed" }),
    [onHarshit]: () => ({ name: "Harshit" }),
  }
);

export { retailerListReducer };
