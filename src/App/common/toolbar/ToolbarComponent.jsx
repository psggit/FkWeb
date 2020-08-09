import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";
import { backIcon } from "../../../assets/images";
import { helpIcon } from "../../../assets/images";

ToolbarComponent.propTypes = {
  helpVisibility: PropTypes.any,
  title: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

function ToolbarComponent(props) {
  const history = useHistory();
  const { helpVisibility } = props;
  const { onClick } = props;
  const { title, children } = props;

  function goBack() {
    history.goBack();
  }

  function showHelp() {}

  return (
    <div className="tool-bar-wrapper">
      <div className="tool-bar fixed">
        <div className="toolbar-layout">
          <img
            className="back-arrow"
            src={backIcon}
            onClick={onClick != null ? onClick : goBack}
          />
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
        {children}
      </div>
    </div>
  );
}

export { ToolbarComponent };
