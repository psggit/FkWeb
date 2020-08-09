import React from "react";
import { drinksIcon, rightArrowIcon } from "../../../assets/images";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { useHistory } from "react-router-dom";

function AddMoreComponent(retailer) {
  const history = useHistory();
  const ForwardRetailerObject = {
    retailer_name: retailer.retailer.name,
    store_info: retailer.retailer.description,
    retailer_id: retailer.retailer.id,
  };

  function showStoreDetails(retailer) {
    history.push({
      pathname: "/storefront",
      state: {
        retailer: ForwardRetailerObject,
      },
    });
  }
  console.log(retailer);

  return (
    <div
      className="add_more_drinks"
      onClick={() => {
        showStoreDetails(retailer);
      }}
    >
      <img className="drinks_icon" src={drinksIcon} />
      <div className="label">Add more drinks to cart</div>
      <img className="arrow_right" src={rightArrowIcon} />
    </div>
  );
}

export { AddMoreComponent };
