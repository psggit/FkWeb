import React from "react";
import PropTypes from "prop-types";

StateCityItem.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

function StateCityItem(props) {
  const { title, onClick } = props;

  return (
    <div className="state-city-item" onClick={onClick}>
      <div className="title">{title}</div>
    </div>
  );
}

export { StateCityItem };
