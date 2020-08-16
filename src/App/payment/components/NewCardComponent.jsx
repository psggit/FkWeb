import React from "react";
import { Link } from "react-router-dom";

import "../style.scss";
import { nextIcon, newCardIcon } from "../../../assets/images";

function NewCardComponent() {
  return (
    <Link to="/payment/options/card/new">
      <div className="new-card-container">
        <img src={newCardIcon} className="new-card-image" />
        <div className="new-card-msg">Add card & proceed to payment</div>
        <img src={nextIcon} className="next-image" />
      </div>
    </Link>
  );
}

export { NewCardComponent };
