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
            <li className="dropdown">
                <NavLink to="/reflection/team-reflection" activeClassName="active" className="dropdown-toggle">
                    REFLECTION
                </NavLink>
                <ul className="dropdown-menu">
                    <li>
                        <NavLink to="/reflection/team-reflection" activeClassName="active">
                            Team Reflection
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reflection/team-contract" activeClassName="active">
                            Team Contract
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reflection/questionnaires" activeClassName="active">
                            Questionnaires
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/reflection/prototyping" activeClassName="active">
                            Prototyping
                        </NavLink>
                    </li>
                </ul>
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
