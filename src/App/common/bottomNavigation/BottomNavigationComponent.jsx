import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import {
  homeIcon,
  searchIcon,
  cartIcon,
  myOrdersIcon,
} from "../../../assets/images";

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
  {
    route: "/myorders",
    icon: myOrdersIcon,
    label: "My Orders",
  },
];

function BottomNavigationComponent() {
  return (
    <div className="navBar-height">
      <div className="navBar navBar-height">
        {tabs.map((value, index) => (
          <div key={"navTouch" + index} className="col-3">
            <NavLink to={value.route}>
              <div className="navItem">
                <img className="navImage" src={value.icon}></img>
                <div className="navText">{value.label}</div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomNavigationComponent;
