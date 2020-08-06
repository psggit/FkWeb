import React from "react";
import { nextIcon } from "../../../assets/images";
import "./style.scss";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

BottomNextComponent.propTypes = {
  routePath: PropTypes.string,
  title: PropTypes.string,
  inActive: PropTypes.bool,
  onClickFunc: PropTypes.func,
  isNav: PropTypes.bool,
};

function BottomNextComponent(props) {
  const { routePath, title, inActive, onClickFunc } = props;
  const history = useHistory();
  function clickProcess() {
    if (inActive != true) {
      if (routePath === undefined) {
        onClickFunc();
      } else {
        history.push(routePath);
      }
    }
  }

  function getNextClassName() {
    if (props.isNav) {
      return "bottom-bar-nav bottom-bar bottom-bar-height";
    } else {
      return "bottom-bar bottom-bar-height";
    }
  }

  return (
    <div className="bottom-bar-height">
      <div className={getNextClassName()}>
        <div
          className={(inActive == true ? "disable " : "") + "btn-general"}
          onClick={() => clickProcess()}
        >
          <div className="btn-label">{title}</div>
          <img className="btn-arrow" src={nextIcon} />
        </div>
      </div>
    </div>
  );
}

export { BottomNextComponent };
