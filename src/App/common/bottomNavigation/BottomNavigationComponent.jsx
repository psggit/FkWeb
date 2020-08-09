import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";
import {
  homeIcon,
  searchIcon,
  cartIcon,
  myOrdersIcon,
  homeActiveIcon,
  cartActiveIcon,
  searchActiveIcon,
  myOrdersActiveIcon
} from "../../../assets/images";

const tabs = [
  {
    route: "/home",
    icon: homeIcon,
    activeIcon: homeActiveIcon,
    label: "Home",
  },
  {
    route: "/search",
    icon: searchIcon,
    activeIcon: searchActiveIcon,
    label: "Search",
  },
  {
    route: "/cart",
    icon: cartIcon,
    activeIcon: cartActiveIcon,
    label: "Cart",
  },
  {
    route: "/myorders",
    icon: myOrdersIcon,
    activeIcon:myOrdersActiveIcon,
    label: "My Orders",
  },
];

function BottomNavigationComponent(props) {
  let location = useLocation().pathname;
  const {cartProducts} = props;
  let totalCartItems = 0;

  Object.keys(cartProducts).forEach(function (key) {
    totalCartItems += cartProducts[key].count;
  });

  return (
    <div className="navBar-height">
      <div className="navBar navBar-height">
        {tabs.map((value, index) => (

          <div key={"navTouch" + index} className="col-3">
            <NavLink to={value.route} activeClassName="activeLink">
              <div className="navItem">
                <span className="navImage">
                  {value.route == location ? (
                    <img src={value.activeIcon} />
                  ) : (
                    <img src={value.icon} />
                  )}
                </span>
                {value.label == "Cart" ? (
                  <div className="navText">
                    {value.label.toUpperCase()}{" "}
                    {totalCartItems > 0 ? (
                      <span className="navBadge">{totalCartItems}</span>
                    ) : null}
                  </div>
                ) : (
                  <div className="navText">{value.label.toUpperCase()}</div>
                )}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export { BottomNavigationComponent };
