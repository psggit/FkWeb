
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const waitForSyed = () => {
  return (dispatch) => {
  };
};

export { waitForSyed };
