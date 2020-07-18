import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";
import backIcon from "../../../assets/images/back.svg";
import helpIcon from "../../../assets/images/help.svg";

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
    <div className="tool-bar-wrapper">
      <div className="tool-bar fixed">
        <div className="toolbar-layout">
          <img className="back-arrow" src={backIcon} onClick={goBack} />
          <img
            className={
              helpVisibility
                ? "help-icon show-content"
                : "help-icon hide-content"
            }
            src={helpIcon}
            onClick={showHelp}
          />
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
}

export { ToolbarComponent };
