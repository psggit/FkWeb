import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import backIcon from "../../../assets/images/cart.png";
import helpIcon from "../../../assets/images/cart.png";
import PropTypes from "prop-types";

ToolbarComponent.propTypes = {
  helpVisibility: PropTypes.any,
  title: PropTypes.any,
};

function ToolbarComponent(props) {
  const history = useHistory();
  const { helpVisibility } = props;
  const { title } = props;
  function goBack() {
    history.goBack();
  }

  function showHelp() {}

  return (
    <div className="tool-bar">
      <div className="toolbar-layout">
        <img className="back-arrow" src={backIcon} onClick={goBack} />
        <img
          className={
            helpVisibility ? "help-icon show-content" : "help-icon hide-content"
          }
          src={helpIcon}
          onClick={showHelp}
        />
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default ToolbarComponent;
