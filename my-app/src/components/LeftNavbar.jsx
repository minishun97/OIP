import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNavbar.css';

function LeftNavbar() {
    return (
        <div className="left-navbar">
            <ul className="left-navbar_links">
                <li>
                    <NavLink to="/reflection/team-reflection" className="tab-link" activeClassName="active">
                        Team Reflection
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reflection/team-contract" className="tab-link" activeClassName="active">
                        Team Contract
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reflection/questionnaires" className="tab-link" activeClassName="active">
                        Questionnaires
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reflection/prototyping" className="tab-link" activeClassName="active">
                        Prototyping
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default LeftNavbar;
