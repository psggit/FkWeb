import React from "react";
import { nextIcon } from "../../../assets/images";
import "./style.scss";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

BottomNextComponent.propTypes = {
  routePath: PropTypes.string,
  redirectPath: PropTypes.string,
  title: PropTypes.string,
  inActive: PropTypes.bool,
  onClickFunc: PropTypes.func,
  isNav: PropTypes.bool,
  children: PropTypes.node,
};

function BottomNextComponent(props) {
  function getNextClassName() {
    if (props.isNav) {
      return (
        (props.children ? "bottom-bar-space-btwn " : "") +
        "bottom-bar-nav bottom-bar bottom-bar-height"
      );
    } else {
      return (
        (props.children ? "bottom-bar-space-btwn " : "") +
        "bottom-bar bottom-bar-height"
      );
    }
  }

  return (
    <div className="bottom-bar-height">
      <div className={getNextClassName()}>
        {props.children}
        <ButtonComponent {...props} />
      </div>
    </div>
  );
}

CartContentComponent.propTypes = {
  content: PropTypes.string,
};

function CartContentComponent(props) {
  return <div className="bottom-cart-content">{props.content}</div>;
}

ButtonComponent.propTypes = {
  routePath: PropTypes.string,
  redirectPath: PropTypes.string,
  title: PropTypes.string,
  inActive: PropTypes.bool,
  onClickFunc: PropTypes.func,
};

function ButtonComponent(props) {
  const { routePath, redirectPath, title, inActive, onClickFunc } = props;
  const history = useHistory();

  function clickProcess() {
    if (inActive != true) {
      if (routePath === undefined && redirectPath === undefined) {
        onClickFunc();
      } else if (redirectPath != undefined) {
        history.replace(redirectPath);
      } else {
        history.push(routePath);
      }
    }
  }

  return (
    <div
      className={(inActive == true ? "disable " : "") + "btn-general"}
      onClick={() => clickProcess()}
    >
      <div className="btn-label">{title}</div>
      <img className="btn-arrow" src={nextIcon} />
    </div>
  );
}

export { BottomNextComponent, ButtonComponent, CartContentComponent };
