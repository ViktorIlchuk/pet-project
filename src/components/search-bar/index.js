import React from 'react';
import Input from '../input';
import './index.scss';

const SearchBar = ({
    onChange,
    placeholder,
    value
}) => {
    return (
        <form>
            <Input
                className='search-bar'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </form>
    )
};

export default SearchBar;