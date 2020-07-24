import React from "react";
import drinksIcon from "../../../assets/images/drinks.svg";
import rightArrowIcon from "../../../assets/images/right_arrow.svg";
import "./style.scss";

function AddMoreComponent() {
  return (
    <div className="add_more_drinks">
      <img className="drinks_icon" src={drinksIcon} />
      <div className="label">Add more drinks to cart</div>
      <img className="arrow_right" src={rightArrowIcon} />
    </div>
  );
}

export { AddMoreComponent };
