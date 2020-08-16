import React from "react";
import PropTypes from "prop-types";
import { rightArrowIcon } from "../../../assets/images";
import "./style.scss";

HelpComponent.propTypes = {
  launchHelp: PropTypes.func,
};

function HelpComponent(props) {
  return (
    <div onClick={() => props.launchHelp()} className="need-help-container ">
      <div className="help-content-container">
        <div className="help-title">Help</div>
        <div className="help-sub-content">FAQs & Contact Support</div>
      </div>
      <img src={rightArrowIcon} className="help-next-icon" />
    </div>
  );
}

export { HelpComponent };
