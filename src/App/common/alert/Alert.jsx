import React from "react";
import "./style.scss";

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
