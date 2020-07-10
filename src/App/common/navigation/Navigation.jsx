import React from "react";
import { NavLink } from "react-router-dom";
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
    label: "Search",
  },
  {
    route: "/cart",
    icon: cartIcon,
    label: "Cart",
  },
];

function Navigation() {
  return (
    <div>
      <NavLink to="/">
        HOME
      </NavLink>
      <NavLink to="/search">
        SEARCH
      </NavLink>
      <NavLink to="/cart">
        CART 
      </NavLink>
      <a href="/cart">
        HyperLink 
      </a>
    </div>
  );
}

export default Navigation;
