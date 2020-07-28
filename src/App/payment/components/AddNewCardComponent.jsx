import React from "react";
import PropTypes from "prop-types";
import "../style.scss";
import { addAddressIcon } from "../../../assets/images";

AddNewCardComponent.propTypes = {
  onclick: PropTypes.func,
};

function AddNewCardComponent(props) {
  const { onclick } = props;
  return (
    <div className="add-new-container" onClick={onclick}>
      <div className="label">Add New Card</div>
      <img className="image" src={addAddressIcon} />
    </div>
  );
}

export { AddNewCardComponent };
