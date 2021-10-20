import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Sidebar = ({route, text}) => {
    return (
        <div>
            <NavLink
                className='nav-link'
                to={route} 
                exact
                activeClassName='active'
            >
                {text}
            </NavLink>
        </div>
    )
};

export default Sidebar;