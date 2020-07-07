import { createAction } from "@reduxjs/toolkit";

const s = createAction("syed");
const h = createAction("harshit");

let syed = s();
let harshit = h();

export { syed, harshit };
