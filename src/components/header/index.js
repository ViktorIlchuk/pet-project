import React from 'react';
import Link from '../link';
import './index.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link route='/' text='Home' />
            <Link route='/students' text='Students' />
            <Link route='/courses' text='Courses' />
        </div>
    )
};

export default Header;