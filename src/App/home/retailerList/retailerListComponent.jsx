import React from "react";
import PropTypes from "prop-types";

RetailerList.propTypes = {
  name: PropTypes.string,
  onSyed: PropTypes.any,
  onHarshit: PropTypes.any,
};

function RetailerList({ name, onSyed, onHarshit }) {
  return (
    <div>
      <h1> Hello {name}</h1>
      <button onClick={onSyed}> Syed </button>
      <button onClick={onHarshit}> Harshit </button>
    </div>
  );
}

export { RetailerList };
