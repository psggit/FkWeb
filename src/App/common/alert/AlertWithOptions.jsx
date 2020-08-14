import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

AlertWithOptions.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  handleOption1: PropTypes.func,
  handleOption2: PropTypes.func,
};

function AlertWithOptions({
  title,
  content,
  option1,
  option2,
  handleOption1,
  handleOption2,
}) {
  return (
    <div className={"modal display-block"}>
      <section className="modal-main">
        {title && <div className="modal-header"> {title}</div>}
        {content && <div className="modal-content"> {content}</div>}
        <div className="modal-btn-container">
          <button className="modal-button-two" onClick={handleOption2}>
            {option2}
          </button>
          <button className="modal-button-one" onClick={handleOption1}>
            {option1}
          </button>
        </div>
      </section>
    </div>
  );
}

export { AlertWithOptions };
