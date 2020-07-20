import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

Alert.propTypes = {
  handleOption: PropTypes.any,
  show: PropTypes.any,
  title: PropTypes.any,
  content: PropTypes.any,
  option: PropTypes.any,
};

function Alert({ handleOption, show, title, content, option }) {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="modal-header"> {title}</div>
        <div className="modal-content"> {content}</div>
        <button className="modal-button" onClick={handleOption}>
          {option}
        </button>
      </section>
    </div>
  );
}

AlertWithOptions.propTypes = {
  handleOption1: PropTypes.any,
  handleOption2: PropTypes.any,
  show: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
  option1: PropTypes.any,
  option2: PropTypes.any,
};

function AlertWithOptions({
  handleOption1,
  handleOption2,
  show,
  title,
  content,
  option1,
  option2,
}) {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <div className="modal-header"> {title}</div>
        <div className="modal-content"> {content}</div>
        <div className="modal-btn-container">
          <button className="modal-button-one" onClick={handleOption1}>
            {option1}
          </button>
          <button className="modal-button-one" onClick={handleOption2}>
            {option2}
          </button>
        </div>
      </section>
    </div>
  );
}

export { Alert, AlertWithOptions };
