import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light sticky-top"
      role="navigation"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Brand
        </a>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink to="/search" className="nav-link">
              Search
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cart" className="nav-link">
              Login
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </nav>
  );
}

export default Navigation;
