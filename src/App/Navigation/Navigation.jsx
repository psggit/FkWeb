import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/images/home.png";
import searchIcon from "../../assets/images/search.png";
import cartIcon from "../../assets/images/cart.png";

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
      <nav
        className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
        role="navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink to="/search" className="nav-link">
                Search
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cart" className="nav-link">
                Cart
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </nav>
      <nav
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={"tab-${index}"}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <img src={tab.icon} width="56" height="56" />
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
}

export default Navigation;
