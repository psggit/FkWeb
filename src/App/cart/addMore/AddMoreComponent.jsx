import React from "react";
import drinksIcon from "../../../assets/images/drinks.svg";
import rightArrowIcon from "../../../assets/images/right_arrow.svg";
import "./style.scss";

function AddMoreComponent() {
  return (
    <div className="add_more_drinks">
      <img src={drinksIcon} />
      <div>Add more drinks to cart</div>
      <img src={rightArrowIcon} />
    </div>
  );
}

export { AddMoreComponent };
