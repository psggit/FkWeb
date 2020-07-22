import React from "react";
import nextIcon from "../../../assets/images/next.svg";
import "./style.scss";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

BottomNextComponent.propTypes = {
  routePath: PropTypes.string,
  title: PropTypes.string,
};

function BottomNextComponent(props) {
  const { routePath } = props;
  const { title } = props;
  const history = useHistory();
  function showNext() {
    history.push(routePath);
  }
  return (
    <div className="bottom-bar">
      <div className="btn-general" onClick={showNext}>
        <div className="btn-label">{title}</div>
        <img className="btn-arrow" src={nextIcon} />
      </div>
    </div>
  );
}

export { BottomNextComponent };
