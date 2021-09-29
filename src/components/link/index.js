import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default function Sidebar({route, text}) {
    return (
        <div>
            <NavLink 
                to={route} 
                exact
                activeClassName='active'
            >
                {text}
            </NavLink>
        </div>
    )
};