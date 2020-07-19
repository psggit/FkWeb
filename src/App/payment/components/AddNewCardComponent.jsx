import React from "react";
import "../style.scss";
import addNewIcon from "../../../assets/images/add_address.svg";

function AddNewCardComponent() {
  return (
    <div className="add-new-container">
      <div className="label">Add New Card</div>
      <img className="image" src={addNewIcon} />
    </div>
  );
}

export { AddNewCardComponent };
