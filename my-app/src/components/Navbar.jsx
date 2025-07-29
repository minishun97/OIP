import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar_links">
      <li>
        <NavLink to="/" activeClassName="active">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/project-journey" activeClassName="active">
          PROJECT JOURNEY
        </NavLink>
      </li>
      <li>
        <NavLink to="/reflection/team-reflection" activeClassName="active">
          REFLECTION
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" activeClassName="active">
          ABOUT US
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
