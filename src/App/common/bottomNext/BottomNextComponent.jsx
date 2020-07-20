import React from "react";
import nextIcon from "../../../assets/images/next.svg";
import "./style.scss";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

BottomNextComponent.propTypes = {
  routePath: PropTypes.string,
  title: PropTypes.string,
  inActive: PropTypes.bool,
};

function BottomNextComponent(props) {
  const { routePath } = props;
  const { title, inActive } = props;
  const history = useHistory();
  function showNext() {
    if (inActive != true) {
      history.push(routePath);
    }
  }
  return (
    <div className="bottom-bar">
      <div className={(inActive == true ? "disable " : "" ) + "btn-general"} onClick={showNext}>
        <div className="btn-label">{title}</div>
        <img className="btn-arrow" src={nextIcon} />
      </div>
    </div>
  );
}

export { BottomNextComponent };
