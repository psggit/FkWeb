import { onSyed } from "./actions";

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const waitForSyed = () => {
  return (dispatch) => {
    sleep(3000).then(() => dispatch(onSyed()));
  };
};

export { waitForSyed };
