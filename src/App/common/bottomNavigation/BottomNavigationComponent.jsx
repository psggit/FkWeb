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
  myOrdersActiveIcon,
} from "../../../assets/images";
import PropTypes from "prop-types";

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
    activeIcon: myOrdersActiveIcon,
    label: "My Orders",
  },
];

BottomComponent.propTypes = {
  val: PropTypes.object,
  loc: PropTypes.string,
  items: PropTypes.number,
};

function BottomComponent(props) {
  const value = props.val;
  const location = props.loc;
  return (
    <div className="navItem">
      <span className="navImage">
        {value.route == location ? (
          <img src={value.activeIcon} />
        ) : (
          <img src={value.icon} />
        )}
      </span>
      {value.label == "Cart" ? (
        <div
          className={(value.route == location ? "activeLink " : "") + "navText"}
        >
          {value.label.toUpperCase()}{" "}
          {props.items > 0 ? (
            <span className="navBadge hcenter flex vcenter">{props.items}</span>
          ) : null}
        </div>
      ) : (
        <div
          className={(value.route == location ? "activeLink " : "") + "navText"}
        >
          {value.label.toUpperCase()}
        </div>
      )}
    </div>
  );
}

function BottomNavigationComponent(props) {
  let location = useLocation().pathname;
  const { cartProducts } = props;
  let totalCartItems = 0;

  Object.keys(cartProducts).forEach(function (key) {
    totalCartItems += cartProducts[key].count;
  });

  return (
    <div className="navBar-height">
      <div className="navBar navBar-height">
        {tabs.map((value, index) => (
          <div key={"navTouch" + index} className="col-3">
            {value.route != location ? (
              <NavLink to={value.route} activeClassName="activeLink">
                <BottomComponent
                  val={value}
                  loc={location}
                  items={totalCartItems}
                />
              </NavLink>
            ) : (
              <BottomComponent
                val={value}
                loc={location}
                items={totalCartItems}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { BottomNavigationComponent };
