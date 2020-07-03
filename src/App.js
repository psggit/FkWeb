import React from "react";
import { hot } from "react-hot-loader/root";
import PropTypes from "prop-types";

App.propTypes = {
  name: PropTypes.string,
};

function App({ name = "def" }) {
  return (
    <div>
      <h1> Hello {name}</h1>
    </div>
  );
}

export default hot(App);
