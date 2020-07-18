import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

HeaderComponent.propTypes = {
  title: PropTypes.any,
};

function HeaderComponent(props) {
  const { title } = props;

  return (
    <div className="header-wrapper">
      <div className="tool-bar fixed">
        <div className="title">{title}</div>
      </div>
    </div>
  );
}

export { HeaderComponent };
