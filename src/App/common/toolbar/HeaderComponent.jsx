import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

HeaderComponent.propTypes = {
  title: PropTypes.any,
  children: PropTypes.any,
};

function HeaderComponent(props) {
  const { title, children } = props;

  return (
    <div className="header-bar fixed">
      <div className="title">{title}</div>
      {children}
    </div>
  );
}

export { HeaderComponent };
