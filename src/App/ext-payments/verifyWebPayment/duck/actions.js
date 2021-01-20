import { createAction } from "@reduxjs/toolkit";

const verifyPaymentProgress = createAction("verifyPaymentProgress");
const verifyPaymentFailure = createAction("verifyPaymentFailure");
const verifyPaymentSuccess = createAction("verifyPaymentSuccess");

export { verifyPaymentProgress, verifyPaymentFailure, verifyPaymentSuccess };
