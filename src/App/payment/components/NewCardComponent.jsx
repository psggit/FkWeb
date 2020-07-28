import React from "react";
import "../style.scss";
import { nextIcon, newCardIcon } from "../../../assets/images";
import PropTypes from "prop-types";

NewCardComponent.propTypes = {
  onclick: PropTypes.func,
};

function NewCardComponent(props) {
  const { onclick } = props;
  return (
    <div className="new-card-container" onClick={onclick}>
      <img src={newCardIcon} className="new-card-image" />
      <div className="new-card-msg">Add card & proceed to payment</div>
      <img src={nextIcon} className="next-image" />
    </div>
  );
}

export { NewCardComponent };
