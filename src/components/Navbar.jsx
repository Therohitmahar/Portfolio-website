import { Link, NavLink } from "react-router-dom";
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Burger from "./burger";

function Navbar() {
  const [mobileView, setMobileView] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setMobileView(!mobileView);
    setOpenMenu(!openMenu);
  }
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <h1>
            <Link to="/">Rohit Mahar</Link>
          </h1>
        </div>
        <label className="burger bars" for="burger">
          <input type="checkbox" id="burger" onClick={handleClick} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </nav>
      <div className={mobileView ? "sub-nav mobile-view" : "sub-nav"}>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/thoughts">
              Thoughts
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/utility">
              Utility
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/work">
              work
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
