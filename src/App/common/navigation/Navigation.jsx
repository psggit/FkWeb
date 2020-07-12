import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import homeIcon from "../../../assets/images/home.png";
import searchIcon from "../../../assets/images/search.png";
import cartIcon from "../../../assets/images/cart.png";

const tabs = [
  {
    route: "/",
    icon: homeIcon,
    label: "Home",
  },
  {
    route: "/search",
    icon: searchIcon,
    label: "Search Drinks",
  },
  {
    route: "/cart",
    icon: cartIcon,
    label: "Cart",
  },
];

function Navigation() {
  return (
    <div className="navBar">
      {tabs.map((value, index) => (
        <div key={"navTouch" + index} className="col-4">
          <NavLink to={value.route}>
            <div className="navItem">
              <img className="navImage" src={value.icon}></img>
              <div className="navText">{value.label}</div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Navigation;
