import React from "react";
import "../style.scss";
import nextIcon from "../../../assets/images/right_arrow.svg";
import cardIcon from "../../../assets/images/new_cards.svg";
import PropTypes from "prop-types";

NewCardComponent.propTypes = {
  onclick: PropTypes.func,
};

function NewCardComponent(props) {
  const { onclick } = props;
  return (
    <div className="new-card-container" onClick={onclick}>
      <img src={cardIcon} className="new-card-image" />
      <div className="new-card-msg">Add card & proceed to payment</div>
      <img src={nextIcon} className="next-image" />
    </div>
  );
}

export { NewCardComponent };
