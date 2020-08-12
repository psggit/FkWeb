import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

SearchNotAvailable.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

function SearchNotAvailable(props) {
  const { title, content } = props;
  return (
    <div className="search-not-available-container">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
}

export { SearchNotAvailable };
