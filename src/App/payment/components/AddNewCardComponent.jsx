import React from "react";
import { Link } from "react-router-dom";

import "../style.scss";
import { addAddressIcon } from "../../../assets/images";

function AddNewCardComponent(props) {
  return (
    <Link to={props.linkto}>
      <div className="add-new-container" onClick={onclick}>
        <div className="label">Add New Card</div>
        <img className="image" src={addAddressIcon} />
      </div>
    </Link>
  );
}

export { AddNewCardComponent };
