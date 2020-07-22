import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

HeaderComponent.propTypes = {
  title: PropTypes.any,
};

function HeaderComponent(props) {
  const { title } = props;

  return (
    <div className="header-bar fixed">
      <div className="title">{title}</div>
    </div>
  );
}

export { HeaderComponent };
