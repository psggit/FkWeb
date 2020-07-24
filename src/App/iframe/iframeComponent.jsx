import React from "react";
import "./styles/style.scss";
import { ToolbarComponent } from "../common/toolbar";
import PropTypes from "prop-types";

IframeComponent.propTypes = {
  title: PropTypes.any,
  url: PropTypes.any,
};

function IframeComponent(props) {
  const { title } = props;
  const { url } = props;
  return (
    <div className="iFrameWrap">
      <ToolbarComponent title={title} />
      <iframe src={url} title={title}></iframe>
    </div>
  );
}

export { IframeComponent };
