import React from "react";
import nextIcon from "../../../assets/images/next.svg";
import "./style.scss";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

BottomNextComponent.propTypes = {
  routePath: PropTypes.string,
  title: PropTypes.string,
  inActive: PropTypes.bool,
  onClickFunc: PropTypes.func,
};

function BottomNextComponent(props) {
  const { routePath } = props;
  const { title, inActive, onClickFunc } = props;
  const history = useHistory();
  function clickProcess() {
    if (inActive != true) {
      if (routePath === undefined) {
	 onClickFunc()
      } else {
	 history.push(routePath);
      }
    }
  }
  return (
    <div className="bottom-bar-height">
      <div className="bottom-bar bottom-bar-height">
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
