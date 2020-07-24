import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

Alert.propTypes = {
  handleOption: PropTypes.func,
  show: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  option: PropTypes.string,
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

export { Alert };
