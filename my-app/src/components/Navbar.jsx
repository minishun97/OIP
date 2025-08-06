import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [reflectionOpen, setReflectionOpen] = useState(false);

    const location = useLocation(); // Get the current location

    // Toggle menu open/close
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Toggle reflection dropdown open/close
    const toggleReflection = () => {
        setReflectionOpen(!reflectionOpen);
    };

    // Reset the menu state when location (route) changes
    useEffect(() => {
        setMenuOpen(false); // Close the menu on route change
    }, [location]);

    return (
        <nav className="navbar">
            <div className="logo">
                <h1 className="logo-text">
                    <span>Friends of</span>
                    <span>the River Kelvin</span>
                </h1>
            </div>

            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
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
                    <li
                        className={`dropdown ${reflectionOpen ? 'active' : ''}`}
                        onClick={toggleReflection}
                        onMouseEnter={() => setReflectionOpen(true)}
                        onMouseLeave={() => setReflectionOpen(false)}
                    >
                        <span className="dropdown-toggle">
                            REFLECTION
                        </span>
                        {/* Sub-menu for Reflection */}
                        <ul className={`dropdown-menu ${reflectionOpen ? 'open' : ''}`}>
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
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <FaBars />
            </div>
        </nav>
    );
};

export default Navbar;
