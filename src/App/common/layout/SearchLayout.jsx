import React from "react";
import PropTypes from "prop-types";

SearchLayout.propTypes = {
  children: PropTypes.node,
  custom: PropTypes.string,
};

function SearchLayout({ children, custom }) {
  return (
    <>
      <div className={`layout-container ${custom}`}>{children}</div>
    </>
  );
}

export default SearchLayout;
